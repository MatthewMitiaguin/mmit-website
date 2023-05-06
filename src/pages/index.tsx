import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './styles.css'

const links = [
  {
    text: "Projects",
    url: "https://github.com/MatthewMitiaguin/",
    description:
      "My GitHub",
    color: "#E95800",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/matthew-mitiaguin/",
    description:
      "My 'professional' social media page",
    color: "#1099A8",
  },
  {
    text: "LeetCode profile",
    url: "https://leetcode.com/mmitiaguin/",
    description:
      "Data Structures & Algorithm stuff",
    color: "#0D96F2",
  }
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="pageStyles">
      <h1 className="headingStyles">
        Matthew Mitiaguin
        <br />
        <span className="headingAccentStyles">— my homepage! 🎉😎🎉😎🎉</span>
      </h1>
      <p className="paragraphStyles">
        Skiing enthusiast & lifelong software engineer learner
      </p>
      <ul className="listStyles">
        {links.map(link => (
          <li key={link.url} className="listItemStyles">
            <span>
              <a
                className="linkStyle"
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
                {link.text}
              </a>
              <p className="descriptionStyle">{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Matt Mitiaguin</title>
