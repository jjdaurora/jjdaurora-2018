import React from 'react'
import Link from 'gatsby-link'

const inlineStyle =  {
  color: '#8E2D4A'
}

const IndexPage = () => (
  <header className="home-wrap">
    <div className="branding-image"></div>
    <div className="home-wrap__content">
      <h1>JJ D'Aurora</h1>
      <p>JJ D'Aurora is a full stack web developer with a passion for customer success.</p>
      <p>His work mostly centers on software product development and implementations. Most recently, he and his team developed an e-commerce shopping cart application built on Angular and .NET Core.
      He approaches his work with a strong mix of business and technical aptitude, and he is always interested in engaging in new and exciting work.</p>
      <p>When he isn't working on software, he can be found failing at his attempts in the kitchen or studying Chinese. He likes music, philosophy, walking his dog, and debating just about anything.</p>
      <div className="links">
        <p><a href="/static/Resume.pdf" style={inlineStyle} download>Resume</a></p>
        <p><a style={inlineStyle} href="mailto:jjdaurora@gmail.com">Contact me</a></p>
      </div>
    </div>
  </header>
)

export default IndexPage
