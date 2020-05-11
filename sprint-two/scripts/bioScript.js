/* --------- BIOGRAPHY COMMENT SECTION --------- */
const genComments = [
  {
    name: "Michael Lyons",
    date: new Date("2018-12-18"),
    message:
      "They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed",
  },
  {
    name: "Gary Wong",
    date: new Date("2018-12-12"),
    message:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    date: new Date("2018-11-15"),
    message:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever",
  },
];

const commentForm = document.getElementById("form-id");
const commentList = document.getElementById("comment-list-id");
document.getElementById("comment-list-id").style.width = "500px";
commentForm.addEventListener("submit", createComment);
//fn for displaying the array objects
function displayComments(genComments) {
  commentList.innerHTML = "";
  for (const i in genComments) {
    let listComment = document.createElement("li");
    let msgName = document.createElement("h3");
    msgName.innerText = genComments[i].name;
    let msgDisc = document.createElement("p");
    msgDisc.innerText = genComments[i].message;

    let msgTime = document.createElement("time");
    msgTime.innerText = genComments[i].date.getDay();
    msgTime.innerText += ", " + genComments[i].date.getMonth();
    msgTime.innerText += ", " + genComments[i].date.getFullYear();

    listComment.appendChild(msgName);
    listComment.appendChild(msgDisc);
    listComment.appendChild(msgTime);
    commentList.appendChild(listComment);
  }
}

function createComment(event) {
  event.preventDefault();

  let nameComment = event.target.name.value;
  let msgComment = event.target.comment.value;
  let dateComment = new Date();
  if (nameComment !== "" && msgComment !== "") {
    genComments.push({
      name: nameComment,
      date: msgComment,
      message: dateComment,
    });
    displayComments(genComments);
  }
}

displayComments(genComments);
