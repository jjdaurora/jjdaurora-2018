import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (

<div className="site_content">
    <main className="site_content-wrapper">
        <div className="image_headshot"></div>
        <div className="site_content-text">
            <p>I'm a software engineer living in Cleveland, Ohio. I focus on front end technologies and user experiece, but I find myself on all parts of the tech stack.</p>
            <p> I care about transportation and the future of our cities. You can find me making amateur music in my basement studio or pretending I'm a good cook.</p>
        </div>
        <section className="site_facts-headers">
            <h3 className="site_facts-header">
                Facts about JJ
            </h3>
            <h3 className="site_facts-header">
                Skills + Tech
            </h3>
            <h3 className="site_facts-header">
                Projects
            </h3>
        </section>
    </main>

</div>
)

export default IndexPage
