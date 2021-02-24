import React, { useEffect, useState} from "react"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { graphql} from "gatsby"
import axios from 'axios'

import { Layout } from "../components"

const Home = React.lazy(() => import('../components/home'))
const Detail = React.lazy(() => import('../components/detail'))
const Map = React.lazy(() => import('../components/map'))
const Search = React.lazy(() => import('../components/search'))

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
    <Layout>

      <Router>
        <Home path="/" />

        <LazyComponent Component={Search} path="search" />
        <LazyComponent Component={Detail} path="detail" />
        <LazyComponent Component={Map} path="map" />
      </Router>
    </Layout>
  )
}

export default IndexPage


export const query = graphql`
  query {
    site {
      siteMetadata {
        url
      }
    }

    allDirectory(filter: { relativePath: { ne: "../components" } }) {
      edges {
        node {
          relativePath
          id
        }
      }
    }
  }
`