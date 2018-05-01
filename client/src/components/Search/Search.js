import React from "react";
import "./Search.css";

const Search = (props) => (
	<div className="card search mb-4" >
  		<div className="card-header text-center">
      <h2> Search </h2>
  		</div>
  		<div className="card-body">
  			<form>
  				<h4 className = "text-center">Topic</h4>
          <input name="topic" className="form-control" value={props.topic} onChange={props.handleInputChange} />
          <hr />
  				<h4 className = "text-center">Start Year</h4>
          <input name="start" className="form-control" value={props.start} onChange={props.handleInputChange} />
          <hr />
  				<h4 className = "text-center">End Year</h4>
          <input name="end" className="form-control mb-3" value={props.end} onChange={props.handleInputChange} />
  			</form>
  		</div>
  		<div className="card-footer">
  			<button className="btn" onClick={props.handleSearch}>Search</button>
  		</div>
	</div>
);

export default Search;
