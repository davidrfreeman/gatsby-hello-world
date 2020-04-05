import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/index"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Dave, and I'm a software engineer.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
      <div>A test div</div>
    </Layout>
  )
}

export default IndexPage
