'use strict'

// encapsulate the class within the namespace
Table.Utils = class {

    static getTable(id) {
        return document.getElementById(id)
    }

    // get table headers  ( <th> names ) wrapped in an Array
    static getHeaders(data) {
        const headers = []
        data.forEach((elem) => {
            for (let prop in elem) {
                if ( !headers.includes(prop) ) {
                    headers.push(prop)
                }
            }
        })
        return headers
    }

    // fill the th elements in the DOM
    static fillHeaders(table, headers, callback) {
            const tr = table.insertRow(0)
            headers.forEach((helem) => {
                let th = document.createElement('th')
                th.innerHTML = helem
                    // register a event click for each created <th> element
                th.onclick = (e) => { callback(table, e.target.innerText) }
                tr.appendChild(th)
            })
        }

    // fill the body of the Table in the DOM
    static fillRows(table, data, headers) {
        data.forEach(elem => {
            let row = table.insertRow(-1)
            let tds = []
            headers.forEach(el => {
                tds.push(row.insertCell(-1))
                tds[tds.length - 1].innerHTML = elem[el] ? elem[el] : ''
                tds[tds.length - 1].id = el
            })
        })
    }

    static format(str, separators) {
        const dates = separators.map(sep => {
            const arr = str.split(sep)
            // check when the split() fails
            if (arr.length === 1) {
                return NaN
            } else {
                return Date.parse(arr[2] + "-" + arr[1] + "-" + arr[0])
            }
        })

        for (let i = 0; i < dates.length; i++) {
            if (!isNaN(dates[i])) {
                return { isDate: true, value: dates[i] }
            }
        }

        return { isDate: false, value: str }
    }

    static sort(table, sortBy) {
        // convert  HTMLCollection to Array and ignore the <th> row
        let rows = Array.from(table.rows).slice(1)
        // sort the Array by Desc order ( "High to low" )
        rows.sort((row1, row2) => {
            let el1 = row1.cells.namedItem(sortBy).innerText
            let el2 = row2.cells.namedItem(sortBy).innerText
            // treat the case of Numeric Values
            if ( !isNaN(parseFloat(el1)) && isFinite(el1) && !isNaN(parseFloat(el2)) &&  isFinite(el2) ) {
               el1 = parseFloat(el1)
               el2 = parseFloat(el2)
            } else {
                const seprs = ['/','-']
                if (this.format(el1, seprs).isDate || this.format(el2, seprs).isDate ) {
                    el1 = this.format(el1, seprs).value
                    el2 = this.format(el2, seprs).value
                }
            }

            return el1 >= el2 ? -1 : 1
        })

        // re-attach the new rows to the parent to update the DOM 
        rows.forEach(row => table.appendChild(row))
    }

}
