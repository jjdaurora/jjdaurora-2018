import React from 'react';
import Helmet from 'react-helmet';


const Projects = () => {
    return (
      <section className="projects-wrap">
        <h2>Projects</h2>
        <p>I love working on projects. Check out some of my work below.</p>
        <ul>
            <li>
              <h3><a href="https://mentorpack.herokuapp.com" target="_blank">Implementing a new e-commerce platform</a></h3>
              <p>This is my current and most major project at BrandMuscle, my current employer. This project serves as a keystone initiative in the company's product roadmap as legacy technology is redesigned with a modern tech stack.</p>
              <p>Working in a small team, my responsibilies have varied from designing the app's component structure in Angular to managing state in Redux, and even developing HTML emails to grooming the product backlog.</p>  
              <p>Built on .NET/Core APIs and Angular front-end. Design implemented using Bootstrap. Deployed with Docker + Kubernetes.</p>
            </li>
            <li>
              <h3><a href="http://culture-stack.herokuapp.com/"  target="_blank">Culture Stack</a></h3>
              <p>A media sharing app for photographers and musicians that helps artsts gain peer feedback on their work.</p>
              <p>Built with React, Semantic UI, AWS</p>
            </li>
        </ul>
      </section>
    );
}

export default Projects