import React, {useEffect, useState} from "react"
import { graphql} from "gatsby"
import axios from 'axios'

import { Layout, Map } from '../components'

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
      <div className="columns">
        <div className="column">
          <Map data={body}/>
        </div>
      </div>
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