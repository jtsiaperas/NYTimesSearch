import React from "react";
import "./SavedArticle.css";

const SavedArticle = props => (
	<div className="card search mb-4" >
  	<div className="card-header text-center">
    <h2> {props.article.title} </h2>
  	</div>
  	<div className="card-body" onClick={() => props.getNotes(props.article._id)}>
  		<p>{props.article.summary}</p>
  		<button className="btn" onClick={()=>props.handleDelete(props.article._id)}>Delete Article</button>
  		{props.article.notes? (props.article.notes.map((note, index)=><p className="note" key={index} id={note._id} >{note.body}</p>)):(<p></p>)}
  		<form>
  			<h3 className = "text-center mt-3">Enter Note</h3>
          	<textarea name="note" className="form-control mb-3" value={props.note} onChange={props.handleInputChange} />
  		</form>
  	</div>
  	<div className="card-footer">
  			<button className="btn" onClick={()=>props.saveNote(props.id)}>Save Note</button>
  	</div>
	</div>
  
);

export default SavedArticle;
