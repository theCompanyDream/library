import React from 'react'
import "./base.scss"

const Layout = ({ children }) => (
	<div className="container">
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-item">
				<a className="navbar-item" href="https://www.casechek.com/wp-content/themes/casechek/images/casechek-logo.png">
					<img src="https://www.casechek.com/wp-content/themes/casechek/images/casechek-logo.png" width="112" height="28" />
				</a>
			</div>

			<div class="navbar-end">
				Frontend Test
			</div>
		</nav>
		{children}
	</div>
)
 
export default Layout