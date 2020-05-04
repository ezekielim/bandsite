/* --------- SHOWS PAGE --------- */
let showsTable = [
  {
    //array table
    row1: ["Mon Dec 17 2018", "Ronald Lane", "San Francisco, CA"].join(" "),
  },
  ["Tue Jul 18 2019", "Pier 3 East", "San Francisco, CA"].join(" "),
  ["Tue Jul 18 2019", "Pier 3 East", "San Francisco, CA"].join(" "),
  ["Fri Jul 22 2019", "View Lounge", "San Francisco, CA"].join(" "),
  ["Sat Aug 12 2019", "Hyatt Agency", "San Francisco, CA"].join(" "),
  ["Fri Sep 05 2019", "Moscow Center", "San Francisco, CA"].join(" "),
  ["Fri Sep 05 2019", "Hyatt Agency", "San Francisco, CA"].join(" "),
];

function genTable(showsTable) {
  //fn to append array strings to DOM
  let tbl = document.getElementById("show-table-id");
  let tblhead = document.createElement("thead");
  tblhead.innerHTML = ["DATES", "VENUE", "LOCATION"].join(" ");
  tblhead.setAttribute("class", "columns");
  tbl.appendChild(tblhead);
  for (i in showsTable) {
    let rows = document.createElement("tr");
    rows.setAttribute("class", "rows");
    let rowCell = rows.insertCell();
    let rowTd = document.createElement("td");
    rowTd.setAttribute("class", "rowTd");
    rowCell.appendChild(rowTd);
    rowTd.innerHTML = showsTable[i];
    tbl.appendChild(rows);
    let btn = document.createElement("button");
    btn.setAttribute("class", "buyBtn");
    btn.innerText = "BUY TICKETS";
    rows.appendChild(btn);
    console.log(showsTable[i]);
  }
}
genTable(showsTable);
/* --------- END OF SHOWS PAGE --------- */

/* --------- BIOGRAPHY COMMENT SECTION --------- */
