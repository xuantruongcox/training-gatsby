import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hello Home</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
