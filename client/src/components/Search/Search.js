import React from "react";
import "./Search.css";

const Search = (props) => (
	<div className="card search mb-4" >
  		<div className="card-header text-center">
      <h2> Search </h2>
  		</div>
  		<div className="card-body">
  			<form>
  				<h3 className = "text-center mt-3">Topic</h3>
          <input name="topic" className="form-control mb-3" value={props.topic} onChange={props.handleInputChange} />
  				<h3 className = "text-center mt-3">Start Year</h3>
          <input name="start" className="form-control mb-3" value={props.start} onChange={props.handleInputChange} />
  				<h3 className = "text-center mt-3">End Year</h3>
          <input name="end" className="form-control mb-3" value={props.end} onChange={props.handleInputChange} />
  			</form>
  		</div>
  		<div className="card-footer">
  			<button className="btn" onClick={props.handleSearch}>Search</button>
  		</div>
	</div>
);

export default Search;
