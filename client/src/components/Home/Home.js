import React, { Component } from "react";
import Header from "../Header";
import Search from "../Search";
import ArticleContainer from "../ArticleContainer";
import API from "../../utils/API.js";
import "./Home.css";

class Home extends Component{
	constructor(props){
		super(props);

		this.state = {
    	articles: [],
    	topic:"",
    	start:"",
    	end:""
  		};
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
        	this.setState({articles: articles.data});
      		}
    	).catch(err => console.log(err));
  	}

  	handleSave = article => {
    	API.saveArticle(article).then(results=>{
      		console.log(results);
      	}).catch(err => console.log(err));
  	}


  	render(){
		return	(
		<div className="home" >
  			<Search handleInputChange={this.handleInputChange} handleSearch= {this.handleSearch} topic= {this.state.topic} start= {this.state.start} end= {this.state.end} />
   			<ArticleContainer handleSave={this.handleSave} articles={this.state.articles} />
		</div>
		);
	}
}
export default Home;
