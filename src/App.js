import React, { useEffect, useState} from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import axios from 'axios'

import { Layout } from "./components"

const Home = React.lazy(() => import('./components/home'))
const Detail = React.lazy(() => import('./components/detail'))
const Map = React.lazy(() => import('./components/map'))
const Search = React.lazy(() => import('./components/search'))

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={FallBackComp}>
    <Component {...props} /> 
  </React.Suspense>
)

const FallBackComp = (
  <p>Loading ...</p>
)

const IndexPage = ({ data }) => {

  const [body, setState] = useState([])
  const [components, setComponents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`https://data.cityofchicago.org/resource/cwig-ma7x.json`).then( res => {
        const payload = res.data;
        setState(payload)
      });
    }

    fetchData()
  }, [])

  return (
      <Router>
        <Layout>
          <Switch>
              <Route path="/">
                <Home path="/" />
              </Route>

              <Route path="/search">
                <LazyComponent Component={Search} path="search" />
              </Route>

              <Route path="/detail">
                <LazyComponent Component={Detail} path="detail" />
              </Route>

              <Route path="/map">
                <LazyComponent Component={Map} path="map" />
              </Route>
          </Switch>
        </Layout>
      </Router>
  )
}

export default IndexPage