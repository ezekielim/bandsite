let addComment = () => {
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=14cf3102-6861-4a78-82bb-ef0c2d4b5d0b"
    )
    .then((response) => {
      data = response.data.response.docs;
      console.log(data);
      return data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
addComment();

// function filterIt(data, search) {
//   return data.filter((obj) =>
//     Object.keys(obj).some((key) => obj[key].includes(search))
//   );
// }

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(data);

  for (i = 0; i < data.length; i++) {
    if (
      data[i].abstract
        .toLowerCase()
        .includes(event.target.search.value.toLowerCase())
    ) {
      let articleSection = document.getElementById("article-section-id");
      let paragraph = document.createElement("p");
      paragraph.setAttribute("class", "para");
      articleSection.appendChild(paragraph);
      let result = data[i].abstract;
      paragraph.innerHTML = result;
      console.log(data[i].abstract);
    }
  }
});
