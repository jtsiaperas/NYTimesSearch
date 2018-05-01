import React from "react";
import "./SavedArticle.css";

const SavedArticle = props => (
	<div className="card saved mb-4" >
  	<div className="card-header text-center">
    <h3> {props.article.title} </h3>
  	</div>
  	<div className="card-body">
  		<div className="savedArticle">
      <p className="summary">{props.article.summary}</p>
      <a className="savedLink" href={props.article.link}>{props.article.link}</a> <hr />
  		<button className="btn mb-3" onClick={()=>props.handleDelete(props.article._id)}>Delete Article</button>
      </div>
  		{props.article.notes? (props.article.notes.map((note, index)=><div className="note mt-3 mb-3" key={index} id={note._id}> <h5>{note.title}</h5><hr /><p>{note.body}</p></div>)):(<p></p>)}
  		<form className="noteForm">
  			<h4 className = "text-center mt-3">Enter Note</h4>
        <hr />
            <h5 className = "text-center mt-3">Title</h5>
          	<input name="title" className="form-control mb-3" value={props.title} onChange={props.handleInputChange} />
          <hr />
            <h5 className = "text-center mt-3">Body</h5>
            <textarea name="body" className="form-control mb-3" value={props.body} onChange={props.handleInputChange} />
  		</form>
  	</div>
  	<div className="card-footer">
  			<button className="btn" onClick={()=>props.saveNote({id: props.id, title: props.title, body: props.body})}>Save Note</button>
  	</div>
	</div>
  
);

export default SavedArticle;
