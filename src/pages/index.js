import React from "react";
import FadedVerticalRule from '../components/FadedVerticalRule';
import FadedHorizontalRule from "../components/FadedHorizontalRule";
import Article from '../components/Article';
import './styles.css';

const links = [
  {
    text: "Projects",
    url: "https://github.com/MatthewMitiaguin/",
    description: "My GitHub",
    color: "#E95800",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/matthew-mitiaguin/",
    description: "My 'professional' social media page",
    color: "#1099A8",
  },
]

const IndexPage = () => {
  return (
    <main className="pageStyles">
      <div className="bioStyles">
        <h1 className="headingStyles">
          Matthew Mitiaguin
          <br />
          <span className="headingAccentStyles">— my homepage! ☁️😎☁️😎☁️</span>
        </h1>
        <p className="paragraphStyles">
          Platform / DevEx Engineer & Skiing Enthusiast
        </p>
        <ul className="listStyles">
          {links.map(link => (
            <li key={link.url} className="listItemStyles">
              <span>
                <a className="linkStyle" href={link.url}>
                  {link.text}
                </a>
                <p className="descriptionStyle">{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="verticalStyles">
        <FadedVerticalRule height={500} width={5} color="#1a7fc1" />
      </div>
      <div className="horizontalStyles">
        <FadedHorizontalRule height={1} width="100%" color="black" />
      </div>
      <div className="projectStyles">
        <Article
          title="Snow Tracker"
          description="AWS Lambda + Discord bot that scrapes snow conditions from Australian ski resorts, scores them out of 10, and pings you when it's worth going."
          dateofarticle="APR 2026"
          category="AWS / Automation"
          url="/blog/snow-tracker"
        />
        <Article
          title="Estate Liquidation App"
          description="A mobile app for estate liquidation field workers — photograph items, get AI-generated inventory entries via Claude vision, and export clean PDF reports."
          dateofarticle="APR 2026"
          category="Platform / AI"
          url="/blog/estate-liquidation"
        />
        <Article
          title="AWS Minecraft Server"
          description="Minecraft server hosted in AWS"
          dateofarticle="MAY 2023"
          category="Cloud"
          url="/blog/minecraft-aws"
        />
        <Article
          title="My Website"
          description="Attempting to make my homepage"
          dateofarticle="MAY 2023"
          category="Web Development"
          url="/blog/making-my-website"
        />
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
