import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (

    <div className="site_content">
        <main className="site_content-wrapper">
        <div className="image_headshot"></div>
        <div className="site_content-text">
            <p>I'm a web developer with a focus in front end technologies, design implementation, and solving user challenges.</p>
            <p> I care about transportation, the future of tech in our cities, and how to thrive in a world of constant change.</p>
            <p className="site_content-text--center"> <strong>Click below to learn more about me </strong></p>
        </div>
        <div className="site_content_icons">
            <span>places lived</span>
            <span>likes</span>
            <span>projects</span>
        </div>
        </main>
    </div>
)

export default IndexPage
