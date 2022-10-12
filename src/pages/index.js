import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage alt="tes" src="../images/alan-zeichick.webp"/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page"></Seo>
