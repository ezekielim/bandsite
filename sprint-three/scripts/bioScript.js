const commentForm = document.getElementById("form-id");
const commentList = document.getElementById("comment-list-id");

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
commentsRequest();
