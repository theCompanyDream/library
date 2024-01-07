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
		volumeInfo: {
			title: '',
			description: '',
			subtitle: '',
			authors: '',
			publishedDate: ''
		}
	})

	const saveBook = (e) => {
		const idx = data.items.findIndex(bookToken => bookToken.id === book.id)
		if (idx) {
			data.items[idx] = book
		} else {
			data.items.push(book)
		}
		history.push('/')
	}

	const handleChange = (e) => {
		setBook({...book.volumeInfo, [e.target.name]: e.target.value})
	}

	useEffect(() => {
		const parsed = queryString.parse(search)
		if (parsed.id) {
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
			<section className="columns">
				<div className="box column">
					<div className="field">
						<label className="label">Title</label>
						<div className="control">
							<input className="input" type="text" name="title" value={book.volumeInfo.title || ''} onChange={handleChange} />
						</div>
					</div>
					<div className="field">
						<label className="label">SubTitle</label>
						<div className="control">
							<input className="input" name="subtitle" value={book.volumeInfo.subtitle || ''} onChange={handleChange} />
						</div>
					</div>
					<div className="field">
						<label className="label">Authors</label>
						<div className="control">
							<input className="input" name="authors" type="text" value={book.volumeInfo.authors || ''} onChange={handleChange} />
						</div>
					</div>
					<div className="field">
						<label className="label">Description</label>
						<div className="control">
							<textarea className="textarea" name="description" value={book.volumeInfo.description || ''} onChange={handleChange}></textarea>
						</div>
					</div>
				</div>
				<div className="box column">
					<div className="field">
						<label className="label">Publisher</label>
						<div className="control">
							<input className="input" type="text" name="publisher" value={book.volumeInfo.publisher || ''} onChange={handleChange} />
						</div>
					</div>
					<div className="field">
						<label className="label">Publish Date</label>
						<div className="control">
							<input className="input" type="text" name="publishedDate" value={book.volumeInfo.publishedDate || ''} onChange={handleChange} />
						</div>
					</div>
				</div>
			</section>
			<section className="box">
				<Link className="button" to="/">Back</Link>
				<button className="button" onClick={saveBook}>Save</button>
			</section>
		</section>
	)
}

export default Detail