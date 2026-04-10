import * as React from "react"
import { graphql, Link } from "gatsby"
import "./blog-post.css"

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <main className="blogPage">
      <nav className="blogNav">
        <Link to="/" className="blogBack">← Back</Link>
      </nav>
      <header className="blogHeader">
        <span className="blogDate">{frontmatter.date}</span>
        <h1 className="blogTitle">{frontmatter.title}</h1>
      </header>
      <article
        className="blogContent"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  )
}

export const Head = ({ data }) => (
  <title>{data.markdownRemark.frontmatter.title}</title>
)

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
