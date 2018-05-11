import React from 'react';
import Helmet from 'react-helmet';


const Projects = () => {
    return (
      <section className="projects-wrap">
        <h2>Projects</h2>
        <p>I love working on projects. Check out some of my work below.</p>
        <ul>
            <li>
              <h3><a href="http://culture-stack.herokuapp.com/">Culture Stack</a></h3>
              <p>A media sharing app for photographers and musicians that helps artsts gain peer feedback on their work.</p>
              <p>Built with React, Semantic UI, AWS</p>
            </li>
             <li>
              <h3><a href="https://chrishomsey.github.io/me-hungry/index.html">Me Hungry</a></h3>
              <p>A food finding app that finds food for you based on how you're feeling.</p>
              <p>Built with Bootstrap, Google Maps, jQuery</p>
            </li>
             <li>
              <h3><a href="https://carmelladimella.com">Carmella DiMella</a></h3>
              <p>This is a project I've been freelancing. Carmella DiMella creates handemade vintage dresses. I'm stoked to be a part of this awesome project.</p>
              <p>Built with Gatsby JS and Sass. Deployed using Netlify.</p>
            </li>
        </ul>
      </section>
    );
}

export default Projects