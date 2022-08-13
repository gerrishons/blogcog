import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const TeamPage = ({
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
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/gerrishon.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Gerrishon Sirere</h1>
          <p>Let me help you kick start your next project &rarr;</p>
        </div>
	  <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gerrishon Sirere</h3>
      </div>
    </Layout>
  )
}
export default TeamPage
export const pageQuery = graphql`
  query TeamPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
