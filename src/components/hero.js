import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "AL-Haystack-Wide.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1920 ) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      heroText: file(relativePath: { eq: "astoria-legend-text.png" }) {
        childImageSharp {
          fluid(maxWidth:1920 ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={{
      position: `relative`,
    }}>
        <Img fluid={data.heroImage.childImageSharp.fluid} />
      <div className="text-overlay">
        <Img fluid={data.heroText.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default Hero
