import React, {useContext, useState} from 'react'
import { Link } from "react-router-dom"

import { BookContext } from './'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "./styles/home.scss"

const Home = () => {

	const data = useContext(BookContext)

	const [filters, setFilters] = useState({
		name: '',
		author: '',
		publisher: ''
	})

	return ( 
		<section className="section is-centered">
	
			<div className="columns">
				<div className="field column is-one-third">
					<p className="control has-icons-left has-icons-right">
						<input className="input" type="email" placeholder="Search" />
						<span className="icon is-small is-left">
							<FontAwesomeIcon className="fas" icon={faSearch} />
						</span>
					</p>
				</div>
			</div>
	
			<div className="section">
				<h3 className="subtitle">All Books</h3>
	
				<ul className="booklist">
					{data.items && data.items.map( book => (
						<li className="column is-one-third" key={book.id}>
							<Link to={`/detail?id=${book.id}`}>
								<article className="message is-link">
									<div className="message-body">
										<ul>
											<li>{book.volumeInfo.title}</li>
											<li>Authors: {book.volumeInfo.authors.map(author => `${author} `)}</li>
											<li>Publisher:{book.volumeInfo.publishedDate}</li>
											<li>Published Date:{book.volumeInfo.publishedDate}</li>
										</ul>
									</div>
								</article>
							</Link>
						</li>
					))}
				</ul>
			</div>
	
		</section>
	)
}
 
export default Home