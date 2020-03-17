import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'


const Footer = () => {
  return (
    <footer className="footer-wrap">
        <div className="footer-btn-group">
        <button><OutboundLink href="https://twitter.com/jjdaurora" target="_blank">Twitter</OutboundLink></button>
        <button><OutboundLink href="https://github.com/jjdaurora" target="_blank">GitHub</OutboundLink></button>
              <button><OutboundLink href="https://www.linkedin.com/in/jjdaurora/" target="_blank">LinkedIn</OutboundLink></button>
        </div>
        <p>JJ D'Aurora 2020  &copy;</p>
    </footer>
  )
}

export default Footer
