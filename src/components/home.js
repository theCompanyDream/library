import React from 'react'
import { Link } from "react-router-dom"

import "./styles/home.scss"

const Home = ({ data }) => ( 
	<section className="section">
		<div className="columns">
			<div className="column is-half">
				<h1 className="title">Books</h1>
			</div>

			<div className="column is-half">
				<button className="button">Create New Book</button>
			</div>
		</div>

		<div className="columns">
			<h3 className="">All Books</h3>

			
		</div>
	</section>
)
 
export default Home