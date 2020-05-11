/* --------- BIOGRAPHY COMMENT SECTION --------- */
// const commentData = [
//   {
//     name: "Michael Lyons",
//     date: new Date("2018-12-18"),
//     message:
//       "They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed",
//   },
//   {
//     name: "Gary Wong",
//     date: new Date("2018-12-12"),
//     message:
//       "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
//   },
//   {
//     name: "Theodore Duncan",
//     date: new Date("2018-11-15"),
//     message:
//       "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever",
//   },
// ];

const commentForm = document.getElementById("form-id");
const commentList = document.getElementById("comment-list-id");
// document.getElementById("comment-list-id");
let commentData = null;
let commentsRequest = () => {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=14cf3102-6861-4a78-82bb-ef0c2d4b5d0b"
    )
    .then((response) => {
      commentData = response.data;
      // console.log(commentData);
      return commentData;
    })
    .catch(function (error) {
      console.log(error);
    });
};
commentsRequest();
// commentForm.addEventListener("submit", createComment);
//fn for displaying the array objects
function displayComments(commentData) {
  for (i in commentData) {
    let list = document.createElement("p");
    commentList.appendChild(list);
    // let result = commentData[i];
    list.innerHTML = commentData[i].data;
    console.log(commentData[i]);
  }
}
displayComments(commentData);

// function createComment(event) {
//   event.preventDefault();

//   let nameComment = event.target.name.value;
//   let msgComment = event.target.comment.value;
//   let dateComment = new Date();
//   if (nameComment !== "" && msgComment !== "") {
//     commentData.push({
//       name: nameComment,
//       date: msgComment,
//       message: dateComment,
//     });
//     displayComments();
//   }
// }

// displayComments();
