import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      marginBottom: `1.45rem`,
      maxWidth: `800px`,
      margin: `auto`,
   }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
