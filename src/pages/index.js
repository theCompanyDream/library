import React, {useEffect, useState} from "react"
import { graphql} from "gatsby"
import axios from 'axios'

import { Layout } from '../components'

const IndexPage = ({ data }) => {

  const [body, setState] = useState([])

  useEffect(() => {
    // const fetchData = async (url) => {
    //   const response = await axios.get(url);
    //   setState(response.json())
    // }

    // fetchData(data.site.siteMetadata.url)
  }, [])

  return (
    <Layout>
      <h1>Big Map</h1>
      
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