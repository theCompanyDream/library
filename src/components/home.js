import React from 'react'
import { Link } from "react-router-dom"

import "./styles/home.scss"

const Home = ({ data }) => ( 
	<section className="section is-centered">

		<div class="field is-two-thirds">
			<p class="control has-icons-left has-icons-right">
				<input class="input" type="email" placeholder="search" />
				<span class="icon is-small is-left">
					<i class="fas fa-search"></i>
				</span>
				<span class="icon is-small is-right">
					<i class="fas fa-check"></i>
				</span>
			</p>
		</div>

		<div className="columns is-centered is-one-third">
			<h3 className="title">All Books</h3>

			<ul className="column">
				{}
			</ul>
		</div>

	</section>
)
 
export default Home