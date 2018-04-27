import axios from "axios";

export default {
  // Gets all books
  getSaved: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  getNotes: function(id) {
    return axios.get("/api/articles" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(article) {
    return axios.post("/api/articles", article);
  }
};
