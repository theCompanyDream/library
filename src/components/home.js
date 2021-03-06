import React from 'react'
import { Link } from "react-router-dom"

import "./styles/home.scss"

const Home = ({ data }) => ( 
	<section className="section ">
		<div className="columns is-centered">
			<div className="column is-half">
				<h1 className="title">Books</h1>
			</div>

			<div className="column is-half">
				<button className="button">Create New Book</button>
			</div>
		</div>

		<div className="columns is-centered">
			<h3 className="">All Books</h3>

			<ul className="column">
				{}
			</ul>
		</div>
	</section>
)
 
export default Home