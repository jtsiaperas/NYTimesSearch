import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";
import ArticleContainer from "./components/ArticleContainer";
import API from "./utils/API.js";
import "./App.css";


class App extends Component{ 
  state = {
    articles: [],
    saved: [],
    topic:"",
    start:"",
    end:"",
    note:""
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
   
    let query = {topic: this.state.topic, start: this.state.start, end: this.state.end};
    API.searchArticles(query).then(articles =>{
        this.setState({articles: articles.data})
      }
    ).catch(err => console.log(err));
  }

  handleSave = article => {
    API.saveArticle(article).then(results=>{
      console.log(results);
      API.getSaved().then(results => {
      let saved = results;
      this.setState({saved: saved});
    }).catch(err => console.log(err));
    }).catch(err => console.log(err));
  }

  handleDelete = id => {
    API.deleteArticle(id).then(results=>{
      console.log(results);
      API.getSaved().then(results => {
      let saved = results;
      this.setState({saved: saved});
    }).catch(err => console.log(err));
    }).catch(err => console.log(err));
  }

  getNotes = id => {
    API.getNotes(id).then(results=>{
     
    }).catch(err => console.log(err));
  }

  saveNote = id =>{
      API.saveNote(id).then(results=>{
      console.log(results);
      API.getSaved().then(results => {
      let saved = results;
      this.setState({saved: saved});
    }).catch(err => console.log(err));
    }).catch(err => console.log(err));
  }

  render() {
    return (
      
        <div className="container">
          <Home  handleInputChange={this.handleInputChange} handleSearch= {this.handleSearch} topic= {this.state.topic} start= {this.state.start} end= {this.state.end} />
          <ArticleContainer handleSave={this.handleSave} articles={this.state.articles} />
          <Saved handleInputChange={this.handleInputChange} saved={this.state.saved} getNotes={this.getNotes} note={this.state.note} handleDelete={this.handleDelete} saveNote={this.saveNote} />
        </div>
      
    );
  }
}

export default App;
