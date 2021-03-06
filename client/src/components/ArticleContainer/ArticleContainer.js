import React from "react";
import Article from "../Article";
import "./ArticleContainer.css";

const ArticleContainer = props => (

	<div className="card articleContainer mt-3 mb-3" >
  		<div className="card-header text-center">
        <h2>Results</h2>
  		</div>
  		<div className="card-body">
  		  {props.articles ? (props.articles.map((article,index) => {
          return <Article handleSave = {props.handleSave} article={article} key={index} id={index}/>
          })):(<div></div>)}
  		</div>
  
	</div>

);

export default ArticleContainer;
