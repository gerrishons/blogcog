import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Team — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -team">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/scalabli.png')`, marginBottom: 0}}>
          <h1 className="post-title"> </h1>
          //<p>Let me help you kick start your next project &rarr;</p>
        </div>
	 // <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gerrishon Sirere</h3>
      </div>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
