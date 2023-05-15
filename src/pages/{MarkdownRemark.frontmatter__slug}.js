import * as React from "react"
import { graphql } from "gatsby"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div style={{ fontFamily: "-apple-system, Roboto, sans-serif, serif"}}>
      <div>
        <h1 style={{textAlign: "center"}}>{frontmatter.title}</h1>
        <h2 style={{textAlign: "center"}}>{frontmatter.date}</h2>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "650px", margin: "0 auto"}} className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
