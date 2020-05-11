const commentForm = document.getElementById("form-id");
const commentList = document.getElementById("comment-list-id");
// document.getElementById("comment-list-id");
// let commentData = null;
let commentsRequest = () => {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=14cf3102-6861-4a78-82bb-ef0c2d4b5d0b"
    )
    .then((response) => {
      let commentData = response.data;
      let list = document.createElement("p");
      list.setAttribute("id", "list-id");
      function displayComments(commentData) {
        for (i in commentData) {
          // let result = commentData[i];
          list.innerHTML = commentData[i];
          commentList.appendChild(list);
          console.log(commentData[i]);
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
commentsRequest();
// commentForm.addEventListener("submit", createComment);
//fn for displaying the array objects
// let list = document.createElement("p");
// list.setAttribute("id", "list-id");
// function displayComments(commentData) {
//   for (i in commentData) {
//     // let result = commentData[i];
//     list.innerHTML = commentData[i].data;
//     commentList.appendChild(list);
//     console.log(commentData[i]);
//   }
// }
// displayComments(commentData);

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
