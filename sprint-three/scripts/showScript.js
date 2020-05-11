// /* --------- SHOWS PAGE --------- */
// let showsTable = [
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
      let commentData = response.data;
      let list = document.createElement("p");
      list.setAttribute("id", "list-id");
      function displayComments(commentData) {
        for (i in commentData) {
          let listComment = document.createElement("li");
          let msgName = document.createElement("h3");
          msgName.innerText = commentData[i].name;
          let msgDisc = document.createElement("p");
          msgDisc.innerText = commentData[i].comment;

          listComment.appendChild(msgName);
          listComment.appendChild(msgDisc);
          commentList.appendChild(listComment);
        }
      }
      displayComments(commentData);
      // console.log(commentData);
      return commentData;
    })
    .catch(function (error) {
      console.log(error);
    });
};
showDatesRequest();

// function genTable(showsTable) {
//   //fn to append array strings to DOM
//   let tbl = document.getElementById("show-table-id");
//   let tblhead = document.createElement("thead");
//   tblhead.innerHTML = ["DATES", "VENUE", "LOCATION"].join(" ");
//   tblhead.setAttribute("class", "columns");
//   tbl.appendChild(tblhead);
//   for (i in showsTable) {
//     let rows = document.createElement("tr");
//     rows.setAttribute("class", "rows");
//     let rowCell = rows.insertCell();
//     let rowTd = document.createElement("td");
//     rowTd.setAttribute("class", "rowTd");
//     rowCell.appendChild(rowTd);
//     rowTd.innerHTML = showsTable[i];
//     tbl.appendChild(rows);
//     let btn = document.createElement("button");
//     btn.setAttribute("class", "buyBtn");
//     btn.innerText = "BUY TICKETS";
//     rows.appendChild(btn);
//     console.log(showsTable[i]);
//   }
// }
// genTable(showsTable);
// /* --------- END OF SHOWS PAGE --------- */
