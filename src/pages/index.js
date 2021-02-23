import React, { useEffect, useState} from "react"
import { Router, Link } from '@reach/router'
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
      await axios.get(data.site.siteMetadata.url).then( res => {
        const payload = res.data;
        setState(payload)
      });
    }

    fetchData()
  }, [data.site.siteMetadata.url])

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
  }
`