// /* --------- SHOWS PAGE --------- */
// let showData = [
//   //array table
//   ["Mon Dec 17 2018", "Ronald Lane", "San Francisco, CA"].join(" "),
//   ["Tue Jul 18 2019", "Pier 3 East", "San Francisco, CA"].join(" "),
//   ["Tue Jul 18 2019", "Pier 3 East", "San Francisco, CA"].join(" "),
//   ["Fri Jul 22 2019", "View Lounge", "San Francisco, CA"].join(" "),
//   ["Sat Aug 12 2019", "Hyatt Agency", "San Francisco, CA"].join(" "),
//   ["Fri Sep 05 2019", "Moscow Center", "San Francisco, CA"].join(" "),
//   ["Fri Sep 05 2019", "Hyatt Agency", "San Francisco, CA"].join(" "),
// ];

const commentForm = document.getElementById("form-id");
const commentList = document.getElementById("comment-list-id");

let showDatesRequest = () => {
  axios
    .get(
      "https://project-1-api.herokuapp.com/showdates?api_key=14cf3102-6861-4a78-82bb-ef0c2d4b5d0b"
    )
    .then((response) => {
      let showData = response.data;
      function genTable(showData) {
        //fn to append array strings to DOM
        let tbl = document.getElementById("show-table-id");
        let tblhead = document.createElement("thead");
        tblhead.innerHTML = ["DATES", "VENUE", "LOCATION"].join(" ");
        tblhead.setAttribute("class", "columns");
        tbl.appendChild(tblhead);
        for (i in showData) {
          let rows = document.createElement("tr");
          rows.setAttribute("class", "rows");
          let rowCell = rows.insertCell();
          let rowTd = document.createElement("td");
          rowTd.setAttribute("class", "rowTd");
          rowCell.appendChild(rowTd);
          rowTd.innerHTML = showData[i];
          tbl.appendChild(rows);
          let btn = document.createElement("button");
          btn.setAttribute("class", "buyBtn");
          btn.innerText = "BUY TICKETS";
          rows.appendChild(btn);
          console.log(showData[i]);
        }
      }
      displayComments(showData);
      console.log(showData);
      return showData;
    })
    .catch(function (error) {
      console.log(error);
    });
};
showDatesRequest();

// function genTable(showData) {
//   //fn to append array strings to DOM
//   let tbl = document.getElementById("show-table-id");
//   let tblhead = document.createElement("thead");
//   tblhead.innerHTML = ["DATES", "VENUE", "LOCATION"].join(" ");
//   tblhead.setAttribute("class", "columns");
//   tbl.appendChild(tblhead);
//   for (i in showData) {
//     let rows = document.createElement("tr");
//     rows.setAttribute("class", "rows");
//     let rowCell = rows.insertCell();
//     let rowTd = document.createElement("td");
//     rowTd.setAttribute("class", "rowTd");
//     rowCell.appendChild(rowTd);
//     rowTd.innerHTML = showData[i];
//     tbl.appendChild(rows);
//     let btn = document.createElement("button");
//     btn.setAttribute("class", "buyBtn");
//     btn.innerText = "BUY TICKETS";
//     rows.appendChild(btn);
//     console.log(showData[i]);
//   }
// }
// genTable(showData);
// /* --------- END OF SHOWS PAGE --------- */
