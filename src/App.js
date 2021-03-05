import React, { Suspense, useEffect, useState} from "react"

import {
  Switch,
  Route
} from "react-router-dom"

import axios from 'axios'

import { Layout } from "./components"

const Home = React.lazy(() => import('./components/home'))
const Detail = React.lazy(() => import('./components/detail'))
const Map = React.lazy(() => import('./components/map'))
const Search = React.lazy(() => import('./components/search'))

const App = () => {

  const [body, setState] = useState([])
  const [components, setComponents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep`).then( res => {
        const payload = res.data;
        setState(payload)
      });
    }

    fetchData()
  }, [])

  return (
    <Layout>
      <Suspense fallback={<div>Loading ...</div>}>
          <Route exact path="/" component={Home} />

          <Route path="/search" component={Search} />

          <Route path="/detail"  component={Detail} />

          <Route path="/map" component={Map} />
      </Suspense>
    </Layout>
  )
}

export default App