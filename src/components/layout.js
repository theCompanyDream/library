import React from 'react'
import "./styles/base.scss"

const Layout = ({ children }) => (
	<div className="container">
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-start">
				<a className="navbar-item" to="/">
					<img src="https://kaplan.com/wp-content/themes/kaplan/images/kaplan-logo.png?12345" width="112" height="28" />
				</a>
			</div>

			<div class="navbar-end">
				<div className="navbar-item">
					<div className="buttons">
						<a className="button is-primary" href="#">
							Frontend Test
						</a>
					</div>
				</div>
			</div>
		</nav>
		{children}
	</div>
)
 
export default Layout