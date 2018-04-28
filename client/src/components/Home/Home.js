import React from "react";
import Header from "../Header";
import Search from "../Search";
import "./Home.css";

const Home = props => (
	<div className="home" >
  		<Header />
   		<Search {...props} />
	</div>
);

export default Home;
