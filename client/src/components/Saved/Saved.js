import React from "react";
import SavedArticle from "../SavedArticle";
import "./Saved.css";

const Saved = props => (
	<div className="card articleContainer mt-3 mb-3" >
  		<div className="card-header text-center">
        <h2>Saved Articles</h2>
  		</div>
  		<div className="card-body">
  			{props.saved.data ? (props.saved.data.map((article,index) => {
          return <SavedArticle handleInputChange={props.handleInputChange} getNotes = {props.getNotes} saveNote = {props.saveNote} note={props.note} handleDelete={props.handleDelete} article={article} key={index} id={article._id}/>
          })):(<div></div>)}
  		
  		</div>
  
	</div>
);

export default Saved;
