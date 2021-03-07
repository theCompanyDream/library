import React from 'react'
import { Link } from "react-router-dom"
import "./styles/base.scss"

const Layout = ({ children }) => (
	<div className="container">
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-start">
				<Link className="navbar-item" to="/">
					<h2 className="title">Books</h2>
				</Link>
			</div>

			<div className="navbar-end">
				<div className="navbar-item">
					<div className="buttons">
						<Link className="button is-primary" to="/detail">
							Create New Book
						</Link>
					</div>
				</div>
			</div>
		</nav>
		{children}
	</div>
)
 
export default Layout