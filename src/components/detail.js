import React from 'react'
import { Link } from "react-router-dom"
import "./styles/detail.scss"

const Detail = ({ location }) => {

	
	return ( 
		<section className="section">
			<h1 className="title">Book Detail</h1>

			<div className="">
				<Link className="button" to="/">Back</Link>
			</div>
		</section>
	)
}
 
export default Detail