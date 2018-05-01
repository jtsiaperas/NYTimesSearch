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
  		{props.article.notes? (props.article.notes.map((note, index)=><div className="note" key={index} id={note._id}> <h4>{note.title}</h4> <p>{note.body}</p></div>)):(<p></p>)}
  		<form>
  			<h3 className = "text-center mt-3">Enter Note</h3>
            <h4 className = "text-center mt-3">Title</h4>
          	<input name="title" className="form-control mb-3" value={props.title} onChange={props.handleInputChange} />
            <h4 className = "text-center mt-3">Body</h4>
            <textarea name="body" className="form-control mb-3" value={props.body} onChange={props.handleInputChange} />
  		</form>
  	</div>
  	<div className="card-footer">
  			<button className="btn" onClick={()=>props.saveNote(props.id)}>Save Note</button>
  	</div>
	</div>
  
);

export default SavedArticle;
