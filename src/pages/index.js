import React from 'react'
import Link from 'gatsby-link'

const inlineStyle =  {
  color: '#8E2D4A'
}

const IndexPage = () => (
  <header className="home-wrap">
    {/* <div className="branding-image"></div> */}
    <div className="home-wrap__content">
      <h1>JJ D'Aurora</h1>
      <p>JJ D'Aurora is a software developer in San Diego, CA.</p>
      <p>His experience in software spans several disciplines, including full stack development, web analytics, APIs, and data modeling. Currently he works at Tealium as an Implementation Engineer, where he consults customers on topics such as tag management systems, real time data collection, vendor API integrations and more.</p>
     <div className="links">
        <p><a href="/static/Resume.pdf" style={inlineStyle} download>Resume</a></p>
        <p><a style={inlineStyle} href="mailto:jjdaurora@gmail.com">Contact me</a></p>
      </div>
    </div>
  </header>
)

export default IndexPage
