import React, {useEffect, useState} from "react"
import { graphql} from "gatsby"
import axios from 'axios'

import { Layout, Form, Map } from '../components'

const IndexPage = ({ data }) => {

  const [body, setState] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(data.site.siteMetadata.url).then( res => {
        const payload = res.data;
        setState(payload)
      });
    }

    fetchData()
  }, [])

  return (
    <Layout>
      <h1>Big Map</h1>

      <Form />
      <Map data={data}/>
      <p>
        
      </p>
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