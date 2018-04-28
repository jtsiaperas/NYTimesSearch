import React from "react";
import Header from "../Header";
import Search from "../Search";
import "./Home.css";

const Home = props => (
	<div className="home" >
  		<Header />
   		<Search handleInputChange={props.handleInputChange} handleSearch= {props.handleSearch} topic= {props.topic} start= {props.start} end= {props.end} />
	</div>
);

export default Home;
