import React from 'react'
import "./base.scss"

const Layout = ({ children }) => ( 
	<div className="columns">
		{children}
	</div>
)
 
export default Layout