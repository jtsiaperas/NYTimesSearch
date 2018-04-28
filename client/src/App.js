import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";
import ArticleContainer from "./components/ArticleContainer";
import API from "./utils/API.js";
import axios from "axios";
import "./App.css";

class App extends Component{ 
  state = {
    articles: [],
    saved: [],
    topic:"",
    start:"",
    end:""
  }

  componentDidMount(){
    API.getSaved().then(results => {
      let saved = results;
      this.setState({saved: saved});
    }).catch(err => console.log(err));
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch = () => {
    let query = `${this.state.topic}&begin_date=${this.state.start}0101&end_date=${this.state.end}0101`;
    const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=
    ${process.env.authKey}&q=${query}`;
    axios.get(queryURL).then(results =>{
      const articles = [];
     
      for (let i=0; i < 5; i++)
      {
        let article = {};
        article.headline = results.response.docs[i].headline.main;
        article.byline = results.response.docs[i].byline.original;
        article.section = results.response.docs[i].section_name;
        article.date = results.response.docs[i].pub_date;
        article.url = results.response.docs[i].web_url;
        articles.push(article);
      }
      this.setState({articles:articles});
    }).catch(err => console.log(err));
  }

  handleSave = article => {
    API.saveArticle(article).then(results=>{
      console.log(results);
    }).catch(err => console.log(err));
  }

  handleDelete = id => {
    API.deleteArticle(id).then(results=>{
      console.log(results);
    }).catch(err => console.log(err));
  }

  getNotes = id => {
    API.getNotes(id).then(results=>{
      let articles = this.state.articles.slice();
      articles[id].notes = results;
      this.setState({articles: articles});
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" render={(props:{handleInputChange: handleInputChange, handleSearch: handleSearch}) => <Home {...props} />}/>
          <Route exact path="/" render={(props:{handleSave: handleSave, articles: articles}) => <ArticleContainer {...props} />}/>
          <Route exact path="/" render={(props) => <Saved {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
