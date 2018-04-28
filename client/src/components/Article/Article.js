import React from "react";
import "./Article.css";

const Article = props => (

	<div className="article mb-2" >
  		<div className="row">
  			<div className="col-md-8 float-left">{props.article.title}</div>
  			<div className="col-md-4 float-right"> <button className="btn" onClick={()=>props.handleSave(props.article)} > Save </button></div>
  		</div>
  	</div>
  
);

export default Article;
