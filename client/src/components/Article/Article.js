import React from "react";
import "./Article.css";

const Article = props => (
	<div className="article" >
  <span className="float-left">{props.article.headline}</span> <button className="btn float-right" onClick={()=>props.handleSave(props.article)} > Save </button>
  </div>
  
);

export default Article;
