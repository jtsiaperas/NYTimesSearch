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
      let saved = results.data;
      console.log(saved);
      this.setState({saved: saved});
    }).catch(err => console.log(err));
  }

  handleDelete = id => {
    console.log(id);
    API.deleteArticle(id).then(results=>{
      let saved = this.state.saved.slice().filter(item => item._id != id);
      console.log(id);
      console.log(saved);
      this.setState({saved: saved});
    }).catch(err => console.log(err));
  }

  saveNote = props =>{
    API.saveNote(props).then(results=>{
     console.log(results);
     let saved = this.state.saved.slice()
     saved.forEach(item => {
        if(item._id === results.data._id)
        {
            item.notes.push({title: props.title, body: props.body});
        }
      });
    
      this.setState({saved:saved});
    }).catch(err => console.log(err));
  }

   render(){
   	 return(
      		
    		<div className="card articleContainer mb-3" >
  		

        	<div className="card-header text-center">
         	<h2>Saved Articles</h2>
  		 	</div>
  		
        	<div className="card-body">
        	
  	   		{this.state.saved ? (this.state.saved.map((article,index) => {
            	return <SavedArticle handleInputChange={this.handleInputChange} saveNote = {this.saveNote} body={this.state.body} title = {this.state.title} notes = {this.state.article_id === article._id ? (this.state.notes):(false)} handleDelete={this.handleDelete} article={article} key={index} id={article._id}/>
            })):(<div></div>)}
            
  		 	</div>
  
      		</div>
    	);
  }
}

export default Saved;
