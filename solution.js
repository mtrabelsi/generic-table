( () => {
'use strict'

//const data = [{ "first_name": "Billy", "last_name": "Campbell", "phone": "62-(500)527-5325" }, { "first_name": "Jonathan", "last_name": "Black", "country": "Russia", "phone": "7-(729)811-4597" }, { "first_name": "cheryl", "last_name": "Harvey", "country": "Indonesia", "phone": "62-(825)454-3810" }, { "first_name": "Cynthia", "last_name": "Cooper" }, { "first_name": "Thomas", "last_name": "Stevens", "phone": "86-(527)535-8464" }, { "first_name": "Jane", "last_name": "Chavez", "country": "Netherlands" }, { "first_name": "bobby", "last_name": "Price", "country": "China", "phone": "86-(898)723-6749" }, { "first_name": "Steve", "last_name": "Hansen", "phone": "93-(362)494-5552" }, { "first_name": "Alan", "last_name": "Cruz", "country": "Philippines", "phone": "63-(617)248-8832" }, { "first_name": "Dennis", "last_name": "Baker", "country": "Iran", "phone": "98-(436)329-3723" }, { "first_name": "Ernest", "last_name": "Bishop", "phone": "86-(566)429-1138" }, { "first_name": "Russell", "last_name": "Meyer", "phone": "62-(687)827-4302" }, { "first_name": "Ryan", "last_name": "Mendoza", "country": "Poland", "phone": "48-(537)109-0373" }, { "first_name": "Maria", "last_name": "Greene", "phone": "92-(831)367-8049" }, { "first_name": "Elizabeth", "last_name": "Moore", "country": "Philippines", "phone": "63-(694)844-9255" }, { "first_name": "Ronald", "last_name": "kim", "phone": "46-(339)931-9221" }, { "first_name": "Samuel", "last_name": "Jacobs", "country": "Russia", "phone": "7-(936)156-5229" }, { "first_name": "Fred", "last_name": "Ross", "phone": "55-(594)481-7354" }, { "first_name": "Andrew", "last_name": "Burns", "country": "Portugal", "phone": "351-(174)443-8706" }, { "first_name": "Robert", "last_name": "Frazier", "country": "Somalia" }]

// Date format : DD-MM-YYYY
//const data = [ { "company_name":"Medline Industries, Inc.", "product":"Benzalkonium Chloride", "price":"481.63" }, { "company_name":"PD-Rx Pharmaceuticals, Inc.", "product":"Alprazolam", "price":"167.62", "fda_date_approved":"02-12-2015" }, { "company_name":"West-ward Pharmaceutical Corp.", "product":"Flumazenil", "fda_date_approved":"23-04-2015" }, { "company_name":"HyVee Inc", "product":"Aspirin", "price":"218.32", "fda_date_approved":"26-07-2015" }, { "company_name":"Aurobindo Pharma Limited", "product":"carisoprodol", "price":"375.58", "fda_date_approved":"28-11-2014" }, { "company_name":"Apotex Corp", "product":"Risperidone", "price":"213.49", "fda_date_approved":"06-11-2015" }, { "company_name":"Unit Dose Services", "product":"Lovastatin", "price":"169.14", "fda_date_approved":"14-09-2015" }, { "company_name":"Jubilant HollisterStier LLC", "product":"Dog Hair Canis spp.", "fda_date_approved":"31-12-2014" }, { "company_name":"AAA Pharmaceutical, Inc.", "product":"ACETAMINOPHEN, CHLORPHENIRAMINE MALEATE, DEXTROMETHORPHAN HYDROBROMIDE, and PHENYLEPHRINE HYDROCHLORIDE", "price":"183.33", "fda_date_approved":"13-12-2015" }, { "company_name":"AKG Innovations LLC", "product":"AVOBENZONE, OCTINOXATE, OCTISALATE", "fda_date_approved":"22-01-2015" }, { "company_name":"hikma Farmaceutica", "product":"Oxytocin" }, { "company_name":"prime Packaging, Inc.", "product":"Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone", "price":"208.17" }, { "company_name":"Davion, Inc", "product":"Triclosan", "price":"80.30", "fda_date_approved":"13-12-2014" }, { "company_name":"CARDINAL HEALTH", "product":"CARBOXYMETHYLCELLULOSE SODIUM, GLYCERIN", "price":"330.22", "fda_date_approved":"11-08-2015" }, { "company_name":"Amgen Inc", "product":"darbepoetin alfa", "price":"332.28", "fda_date_approved":"01-07-2015" }, { "company_name":"Autumn Harp, Inc.", "product":"Salicylic Acid", "price":"34.43", "fda_date_approved":"25-03-2015" }, { "company_name":"American Regent, Inc.", "product":"sodium phosphate, monobasic, monohydrate and sodium phosphate, dibasic anhydrous", "price":"11.60" }, { "company_name":"J. A. Cosmetics U.S. INC", "product":"TITANIUM DIOXIDE", "price":"130.90", "fda_date_approved":"01-12-2015" }, { "company_name":"NATURE REPUBLIC CO., LTD.", "product":"Titanium Dioxide, OCTINOXATE, Zinc Oxide", "price":"124.48" }, { "company_name":"L. Perrigo Company", "product":"Dextromethorphan Hydrobromide, Guaifenesin", "price":"73.09", "fda_date_approved":"03-02-2016" } ]

// Date format : DD/MM/YYYY
const data = [ { "company_name":"Medline Industries, Inc.", "product":"Benzalkonium Chloride", "price":"481.63" }, { "company_name":"PD-Rx Pharmaceuticals, Inc.", "product":"Alprazolam", "price":"167.62", "fda_date_approved":"02/12/2015" }, { "company_name":"West-ward Pharmaceutical Corp.", "product":"Flumazenil", "fda_date_approved":"23/04/2015" }, { "company_name":"HyVee Inc", "product":"Aspirin", "price":"218.32", "fda_date_approved":"26/07/2015" }, { "company_name":"Aurobindo Pharma Limited", "product":"carisoprodol", "price":"375.58", "fda_date_approved":"28/11/2014" }, { "company_name":"Apotex Corp", "product":"Risperidone", "price":"213.49", "fda_date_approved":"06/11/2015" }, { "company_name":"Unit Dose Services", "product":"Lovastatin", "price":"169.14", "fda_date_approved":"14/09/2015" }, { "company_name":"Jubilant HollisterStier LLC", "product":"Dog Hair Canis spp.", "fda_date_approved":"31/12/2014" }, { "company_name":"AAA Pharmaceutical, Inc.", "product":"ACETAMINOPHEN, CHLORPHENIRAMINE MALEATE, DEXTROMETHORPHAN HYDROBROMIDE, and PHENYLEPHRINE HYDROCHLORIDE", "price":"183.33", "fda_date_approved":"13/12/2015" }, { "company_name":"AKG Innovations LLC", "product":"AVOBENZONE, OCTINOXATE, OCTISALATE", "fda_date_approved":"22/01/2015" }, { "company_name":"hikma Farmaceutica", "product":"Oxytocin" }, { "company_name":"prime Packaging, Inc.", "product":"Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone", "price":"208.17" }, { "company_name":"Davion, Inc", "product":"Triclosan", "price":"80.30", "fda_date_approved":"13/12/2014" }, { "company_name":"CARDINAL HEALTH", "product":"CARBOXYMETHYLCELLULOSE SODIUM, GLYCERIN", "price":"330.22", "fda_date_approved":"11/08/2015" }, { "company_name":"Amgen Inc", "product":"darbepoetin alfa", "price":"332.28", "fda_date_approved":"01/07/2015" }, { "company_name":"Autumn Harp, Inc.", "product":"Salicylic Acid", "price":"34.43", "fda_date_approved":"25/03/2015" }, { "company_name":"American Regent, Inc.", "product":"sodium phosphate, monobasic, monohydrate and sodium phosphate, dibasic anhydrous", "price":"11.60" }, { "company_name":"J. A. Cosmetics U.S. INC", "product":"TITANIUM DIOXIDE", "price":"130.90", "fda_date_approved":"01/12/2015" }, { "company_name":"NATURE REPUBLIC CO., LTD.", "product":"Titanium Dioxide, OCTINOXATE, Zinc Oxide", "price":"124.48" }, { "company_name":"L. Perrigo Company", "product":"Dextromethorphan Hydrobromide, Guaifenesin", "price":"73.09", "fda_date_approved":"03/02/2016" } ]


/*
* class Utils {
*    getHeaders(data)
*    fillHeaders(table, headers, callback)
*    fillRows(table, data, headers)
*    sort(table, sortBy)
*  }
*/

class Utils {

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

    // headers is an Array of strings represent the <th> elements
    const headers = Utils.getHeaders(data)
    // our table DOM Node
    const table = Utils.getTable("table")
    // creating <th> elements - notice the sort() function passed as callback - this will be called later upon <th> click 
    Utils.fillHeaders(table, headers, Utils.sort.bind(Utils))
    // then we fill the body <tr><td></td>...<tr/>
    Utils.fillRows(table, data, headers)

})()
