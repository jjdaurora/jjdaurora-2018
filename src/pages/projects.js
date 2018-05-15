import React from 'react';
import Helmet from 'react-helmet';


const Projects = () => {
    return (
      <section className="projects-wrap">
        <h2>Projects</h2>
        <p>I love working on projects. Check out some of my work below.</p>
        <ul>
            <li>
              <h3><a href="http://culture-stack.herokuapp.com/"  target="_blank">Culture Stack</a></h3>
              <p>A media sharing app for photographers and musicians that helps artsts gain peer feedback on their work.</p>
              <p>Built with React, Semantic UI, AWS</p>
            </li>
             <li>
              <h3><a href="https://chrishomsey.github.io/me-hungry/index.html"  target="_blank">Me Hungry</a></h3>
              <p>A food finding app that finds food for you based on how you're feeling.</p>
              <p>Built with Bootstrap, Google Maps, jQuery</p>
            </li>
             <li>
              <h3><a href="https://carmelladimella.com"  target="_blank">Carmella DiMella</a></h3>
              <p>This is a project I've been freelancing. Carmella DiMella creates handemade vintage dresses. I'm stoked to be a part of this awesome project.</p>
              <p>Built with Gatsby JS and Sass. Deployed using Netlify.</p>
            </li>
            <li>
              <h3><a href="https://mentorpack.herokuapp.com" target="_blank">Mentor Pack</a></h3>
              <p>Mentor Pack is a personal care subscription service that uses a buy one-give one model to help homeless shelters supply local communities with backpacks containing essential care products, and is the result of Cleveland's GiveBackHack, a weekend long hackathon for social innovation. Mentor Pack won 4th place at the event and was awarded $5,000 in start-up business consultation.</p>
              <p>Built with Gatsby JS and Sass. Deployed using Netlify.</p>
            </li>
        </ul>
      </section>
    );
}

export default Projects