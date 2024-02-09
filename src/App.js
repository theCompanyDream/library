import React, { Suspense, useLayoutEffect, useState } from "react"
import { Route } from "react-router-dom"

import { Layout, BookContext } from "./components"
const Home = React.lazy(() => import('./components/home'))
const Detail = React.lazy(() => import('./components/detail'))

const App = () => {
  const [body, setState] = useState({})
  useLayoutEffect(() => {
    const fetchData = () => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep`, {
        mode: "cors",
        credentials: "include",
				referrerPolicy: "no-referrer-when-downgrade",
      })
          .then( res => res.json())
          .then( data => {
              setState({...data})
          });
    }
    fetchData()
  }, [])
  return (
    <BookContext.Provider value={body}>
      <Layout>
        <Suspense fallback={<div>Loading ...</div>}>
            <Route exact path="/" component={Home} />
            <Route path="/detail"  component={Detail} />
        </Suspense>
      </Layout>
    </BookContext.Provider>
  )
}

export default App