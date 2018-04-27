import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";
import API from "./utils/API.js";
import "./App.css";

class App extends Component{ 
  state = {
    articles: [],
    saved: []
  }

  componentDidMount(){
    API.getSaved().then(results => {
      let saved = results;
      this.setState({saved: saved});
    }).catch(err => console.log(err));
  }
  
  const propsRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      <Component {...props}/>
    )}/>
  )

  handleSearch = query => {
    const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=
    ${process.env.authKey}&q=${query}`;
    axios.get(queryURL).then(results =>{
      const articles = [];
      let article = {};
      

    })
  }

  handleSave = article => {
    API.saveArticle(article)then(results=>{
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
        <div>
          <propsRoute exact path="/" component={Home} />
          <propsRoute exact path="/" component={Saved} />
        </div>
      </Router>
    );
  }
}

export default App;
