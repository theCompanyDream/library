import React, {useState, useEffect, useContext} from 'react'
import { Link, useLocation } from "react-router-dom"
import { queryString } from 'query-string'

import { BookContext } from './'
import "./styles/detail.scss"

const Detail = () => {

	const data = useContext(BookContext)
	const [book, setBook] = useState({
		volumeInfo: {}
	})

	const submit = () => {
		data.addBook(book);
	}

	useEffect(() => {
		if (id) {
			const book = data.items.find((book) => book.id == id)
			if (book) {
				setBook(book);
			}
		}
	}, [])

	return ( 
		<section className="section">
			<h1 className="title">{id ? "Edit Book": "Add Book"}</h1>

			<div className="columns">
				<div className="box column">
					
					<div class="field">
						<label class="label">Title</label>
						<div class="control">
							<input class="input" type="text" placeholder="Name" value={book.volumeInfo.title} />
						</div>
					</div>


				</div>

				<div className="box column">
					
				</div>
			</div>

			<div className="box">
				<Link className="button" to="/">Back</Link>
				<Link className="button" to="/">Back</Link>
			</div>
		</section>
	)
}
 
export default Detail