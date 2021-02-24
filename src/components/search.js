import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./styles/form.scss"

const Search = () => {

	const [form, setState] = useState([])

	return ( 
		<form>
			<input type="text" />
			<button></button>
			
			<ul>
				{}
			</ul>
		</form>
	)
}
 
export default Search