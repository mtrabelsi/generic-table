/*  Table is our global app namespace :
 *   Table {
 *        Data :  this where our data reside
 *        Utils : a class with some utils functions to make the main code slim
 *    }
 */

( () => {
'use strict'

    const utils = Table.Utils
    // headers is an Array of strings represent the <th> elements
    const headers = utils.getHeaders(Table.data)
    // our table DOM Node
    const table = utils.getTable("table")
    // creating <th> elements - notice the sort() function passed as callback - this will be called later upon <th> click 
    utils.fillHeaders(table, headers, utils.sort.bind(utils))
    // then we fill the body <tr><td></td>...<tr/>
    utils.fillRows(table, Table.data, headers)

})()
