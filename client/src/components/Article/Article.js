import React from "react";
import "./Article.css";

const Article = props => (

	<div className="article" >
  		<span className="float-left">{props.article.title}</span>
  			<span className="float-right"> <button className="btn" onClick={()=>props.handleSave(props.article)} > Save </button></span>
  		
  	</div>
  
);

export default Article;
