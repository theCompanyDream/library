import React, {useState, useEffect, useContext} from 'react'
import { Link, useLocation, useHistory } from "react-router-dom"
import queryString from 'query-string'

import { BookContext } from './'
import "./styles/detail.scss"

const Detail = () => {

	const [isEdit, setState] = useState(false)
	const { search } = useLocation()
	const history = useHistory()
	const data = useContext(BookContext)
	const [book, setBook] = useState({
		volumeInfo: {}
	})

	const saveBook = (e) => {
		const idx = data.items.findIndex(bookToken => bookToken.id === book.id)

		console.log(idx)

		if (idx) {
			data.items[idx] = book
		} else {
			data.items.push(book)
		}

		history.push('/')
	}

	useEffect(() => {
		const parsed = queryString.parse(search)

		if (parsed) {
			const chosen_book = data.items.find((book) => book.id === parsed.id)
			if (chosen_book) {
				setBook(chosen_book)
				setState(true)
			}
		}
	}, [search, data.items])

	return ( 
		<section className="section">
			<h1 className="title">{isEdit ? "Edit Book": "Add Book"}</h1>

			<div className="columns">
				<div className="box column">
					
					<div className="field">
						<label className="label">Title</label>
						<div className="control">
							<input className="input" type="text" placeholder="Name" value={book.volumeInfo.title} />
						</div>
					</div>

					<div className="field">
						<label className="label">SubTitle</label>
						<div className="control">
							<textarea className="textarea" value={book.volumeInfo.subtitle} placeholder="subtitle"></textarea>
						</div>
					</div>

					<div className="field">
						<label className="label">Authors</label>
						<div className="control">
							<input className="input" type="text" placeholder="Name" value={book.volumeInfo.authors} />
						</div>
					</div>

					<div className="field">
						<label className="label">Description</label>
						<div className="control">
							<textarea className="textarea" value={book.volumeInfo.description} placeholder="subtitle"></textarea>
						</div>
					</div>

				</div>

				<div className="box column">
					<div className="field">
						<label className="label">Publish Date</label>
						<div className="control">
							<input className="input" type="text" onChange={setBook} value={book.volumeInfo.publishedDate} />
						</div>
					</div>
				</div>
			</div>

			<div className="box">
				<button className="button" onClick={saveBook}>Save</button>
				<Link className="button" to="/">Back</Link>
			</div>
		</section>
	)
}
 
export default Detail