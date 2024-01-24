/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Startup Landing Page",
    description: "This is a landing webpage for the startup called BR Softsol.",
    url: "https://ranaashutosh31.github.io/BR-SoftSol-SampleWebsite/",
  },
  {
    title: "Electric Utility Site",
    description: "This is an Electric Utility Website with many features available.",
    url: "https://ranaashutosh31.github.io/Electric_Utility_Website/index.html",
  },
  {
    title: "Temple Travel Site",
    description: "This is a Temple Travel Website implicit with parallax effect.",
    url: "https://ranaashutosh31.github.io/Temple_Travel/#",
  },
  {
    title: "To-Do WebAppv",
    description: "This is an under development To-Do List WebApp.",
    url: "https://ranaashutosh31.github.io/To-Do-List-WebApp/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
