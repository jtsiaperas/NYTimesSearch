const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("./models");

//set mongoDB for local or heroku
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

//connect to database
mongoose.connect(MONGODB_URI);

//application logging
app.use(logger("dev"));

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
// Route for getting all Articles from the db
app.get("/api/articles", function(req, res) {
  // TODO: Finish the route so it grabs all of the articles
  db.Article.find({})
  .populate("notes")
  .then(function(dbArticle) {
          // Render the articles on the screen
          res.json(dbArticle);
        })
  .catch(function(err) {
      // If an error occurred, send it to the client
       return res.json(err);
   });
});

// Route for grabbing a specific Article by id, populate it with it's note
app.get("/api/articles/:id", function(req, res) {
  // TODO
  // ====
  db.Article.findOne({_id: req.params.id})
  .populate("notes")
  .then(function(dbArticle) {
          // Render the articles on the screen
          res.json(dbArticle);
        })
  .catch(function(err) {
      // If an error occurred, send it to the client
       return res.json(err);
   });
  // Finish the route so it finds one article using the req.params.id,
  // and run the populate method with "note",
  // then responds with the article with the note included
});

// Route for saving/updating an Article's associated Note
app.post("/api/articles/:id", function(req, res) {
  // TODO
     db.Note.create(req.body)
     .then(function(dbNote){
      return db.Article.findOneAndUpdate({_id: req.params.id}, {$push: {notes: dbNote._id}});
     })
     .then(function(dbArticle)
      {
        res.json(dbArticle);
      })
     .catch(function(err) {
      // If an error occurred, send it to the client
       return res.json(err);
   }); 
  // save the new note that gets posted to the Notes collection
  // then find an article from the req.params.id
  // and update it's "note" property with the _id of the new note
});

app.post("/api/articles", function(req,res){
    db.Article.upsert(req.body)
    .then(function(dbArticle)
      {
        res.json(dbArticle);
      })
     .catch(function(err) {
      // If an error occurred, send it to the client
       return res.json(err);
      });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.get(function(req, res) {
//   // First, we grab the body of the html with request
//   axios.get("http://www.bbc.com/").then(function(response) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     const $ = cheerio.load(response.data);
//     const articles = [];
//     // Now, we grab every h2 within an article tag, and do the following:
//     $(".media-list__item").each(function(i, element) {
//       // Save an empty result object
//       let result = {};
      
//       // Add the text and href of every link, and save them as properties of the result object
//       result.title = $(this)
//         .find(".media__title")
//         .text();
//       result.link = $(this)
//         .find("a")
//         .attr("href");
//       result.summary = $(this)
//         .find(".media__summary")
//         .text();
      
//       articles.push(result);
        
//     }).then(results => res.json(articles));

//     // If we were able to successfully scrape and save an Article, send a message to the client
   
//   });
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
