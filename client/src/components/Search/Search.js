import React from "react";
import "./Search.css";

const Search = (props) => (
	<div className="card search" >
  		<div className="card-header">
  		</div>
  		<div className="card-body">
  			<form>
  				<span className = "text-center"><h3>Topic</h3></span>
          <input name="topic" className="form-control" value={props.topic} onChange={props.onChange} />
  				<span className = "text-center"><h3>Start Year</h3></span>
          <input name="start" className="form-control" value={props.start} onChange={props.onChange} />
  				<span className = "text-center"><h3>End Year</h3></span>
          <input name="end" className="form-control" value={props.end} onChange={props.onChange} />
  			</form>
  		</div>
  		<div className="card-footer">
  			<button className="btn" onClick={props.handleSearch}>Search</button>
  		</div>
	</div>
);

export default Search;
