import React, { Component } from "react";
import SavedArticle from "../SavedArticle";
import API from "../../utils/API.js";
import "./Saved.css";

class Saved extends Component{ 
  constructor(props)
  {
    super(props);
    this.state = {
     saved: [],
     notes: [],
     article_id:"",
     body:"",
     title:""
    };
  }
  

  componentDidMount(){
    this.getSaved();
  }
  
  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
          [name]: value
      });
    };

  getSaved=()=>{
    API.getSaved().then(results => {
      let saved = results;
      this.setState({saved: saved});
    }).catch(err => console.log(err));
  }

  handleDelete = id => {
    API.deleteArticle(id).then(results=>{
      console.log(results);
      this.getSaved();
    }).catch(err => console.log(err));
  }

  getNotes = id => {
    API.getNotes(id).then(results=>{
      this.setState({notes: results, article_id: id});
    }).catch(err => console.log(err));
  }

  saveNote = id =>{
      API.saveNote(id).then(results=>{
      console.log(results);
      this.getSaved();
    }).catch(err => console.log(err));
  }

   render(){
   	 return(
      		
    		<div className="card articleContainer mt-3 mb-3" >
  		

        	<div className="card-header text-center">
         	<h2>Saved Articles</h2>
  		 	</div>
  		
        	<div className="card-body">
        	
  	   		{this.state.saved.data ? (this.state.saved.data.map((article,index) => {
            	return <SavedArticle handleInputChange={this.handleInputChange} getNotes = {this.getNotes} saveNote = {this.saveNote} body={this.state.body} title = {this.state.title} notes = {this.state.article_id === article._id ? (this.state.notes):(false)} handleDelete={this.handleDelete} article={article} key={index} id={article._id}/>
            })):(<div></div>)}
            
  		 	</div>
  
      		</div>
    	);
  }
}

export default Saved;
