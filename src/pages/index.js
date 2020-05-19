import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"
import RotatingLogo from "../components/rotatingLogo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      marginBottom: `1.45rem`,
      margin: `auto`,
   }}>
      <Hero />
      <RotatingLogo />
    </div>
  </Layout>
)

export default IndexPage
