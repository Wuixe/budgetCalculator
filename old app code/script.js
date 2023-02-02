const submitEarningsAndLoans = document.getElementById("earnings-and-loans");
const submitBudget = document.getElementById("submit-budget");
const submitActualSpending = document.getElementById("submit-actual-spending");
const createTable = document.getElementById("create-table");
let funds = document.getElementById("available-funds");
let groceryBudget = document.getElementById("gorcery-budget");
let funBudget = document.getElementById("fun-budget");
let leftover = document.getElementById("leftover");
let actualSpending = document.getElementById("actual-spending");
let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let testRows = ["a", "b", "c"];
let testColumns = ["e", "f", "g"];
let availableFundsData = [1, 2, 3, 4];
const availableFundsTitles = ["income", "loan", "rent", "leftover"];
const availableFundsRows = [" "];
let financeData = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const financeTitles = ["budget", "pendings", "delta"];
const financeRows = ["groceries", "fun", "leftover"];

// Makes the slider visible
let updateRangeValue = (value, id) => {
    const rangeValue = document.getElementById(id);
    rangeValue.textContent = value + "%";
}

// My math operations
let substract = (a, b) => Number(a) - Number(b);
let add = (a, b) => Number(a) + Number(b);
let percent = (a) => Number("." + a) * Number(availableFunds());
let isNegative = (a) =>  a > 0;

//computes available funds
let availableFunds = () => {
   availableFundsData = [
        add(document.getElementById("salary").value, document.getElementById("help").value),
        document.getElementById("loan").value,
        document.getElementById("rent").value,
    ];
    let fundsData = substract(availableFundsData[0], add(availableFundsData[1], availableFundsData[2]));
    availableFundsData.push(fundsData);
    return fundsData;
}

//My display functions

let displayAvailblefunds = () => funds.textContent = availableFunds();

let displayBudget = () => {
    financeData[0] = percent(document.getElementById("groceries").value);
    financeData[3] = percent(document.getElementById("fun").value);
    financeData[6] = substract(availableFundsData[3], add(financeData[0], financeData[3])); 
    groceryBudget.textContent = financeData[0]
    funBudget.textContent = financeData[3];
    leftover.textContent = financeData[6];
}

let displayActualSpending = () => {
    financeData[1] = document.getElementById("groceries-spending").value;
    financeData[4] = document.getElementById("fun-spending").value;
    financeData[7] = add(financeData[1], financeData[4]);
    actualSpending.textContent = financeData[7];
    financeData[2] = substract(financeData[0], financeData[1]);
    financeData[5] = substract(financeData[3], financeData[4]);
    financeData[8] = substract(financeData[6], financeData[7]);
}
/*
****************************************
  Table : makes table data and displays
****************************************
*/

let displayTable = () => 
    document.getElementById("finance-table").innerHTML = 
        table(creatTableData(availableFundsRows, availableFundsTitles, availableFundsData))
        + "<br><br>" + table(creatTableData(financeRows, financeTitles, financeData));

// creates an object that will be in a format that my table function can use
let creatTableData = (rows, columns, data) => {
    let table = {
      columnTitles: columns
    };
    let k = 0;
    for (let i = 0; i < rows.length; i++) {
      table["row" + (i + 1)] = [rows[i]];
      for (let j = 0; j < columns.length; j++) {
        table["row" + (i + 1)].push(data[k]);
        k++;
      }
    }
    return table;
  };  

//makes the row html
let createRow = (row) => {
    let rowHtml = "<tr>"
    for (let i = 0; i < row.length; i++) {
        if (isNegative(row[i]) || typeof row[i] === "string") {
        rowHtml = rowHtml.concat("<td>" + row[i] + "</td>");
        }
        else { rowHtml = rowHtml.concat("<td class = negative>" + row[i] + "</td>")
        }
    }
    rowHtml = rowHtml.concat("</tr>")
    return rowHtml;
}

//check if there are row titles
let isRowTitles = (tb) => {
    if (tb.columnTitles.length < tb.row1.length) {
        return true;
    }
    else { return false; }
}

//makes the titles for the columns. Will add a blank space is the rows have titles too.
let createColumnTitles = (tb) => {
    let columnTitles = "";
    if (isRowTitles(tb)) {
        tb.columnTitles.unshift(" ");
        columnTitles = createRow(tb.columnTitles);
    }
    else {
        columnTitles = createRow(tb.columnTitles);
    }
    return columnTitles;
}

//creates an html string that makes a table containing data from the object made in creatTableData function
let table = (tb) => {
    let tableHtml = "<table>";
    tableHtml = tableHtml.concat(createColumnTitles(tb));
    let rowKeys = Object.keys(tb).filter(key => key !== 'columnTitles');
    for (let i = 0; i < rowKeys.length; i++) {
        tableHtml = tableHtml.concat(createRow(tb[rowKeys[i]]));
    }
    tableHtml = tableHtml.concat("</table>");
    tableHtml = tableHtml.replaceAll("<td> </td>", "<td class = 'blank'> </td>");
    return tableHtml;
}




submitEarningsAndLoans.addEventListener("click", displayAvailblefunds);
submitBudget.addEventListener("click", displayBudget);
submitActualSpending.addEventListener("click", displayActualSpending);
createTable.addEventListener("click", displayTable);
