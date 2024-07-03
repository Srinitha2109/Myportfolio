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
import image from "../images/project.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Student Management System",
    description:
      "Engineered a robust web application using React.js for the front-end, Node.js for the back-end, and MongoDB for the database, facilitating seamless student registration, and detailed tracking of student information.",
    url: "https://github.com/Srinitha2109/student-manager",
  },
  {
    title: "Blog Application",
    description:
      "Developed a robust website featuring advanced Redux for efficient state management, secure userauthentication, and complete CRUD functionality.",
    url: "https://github.com/Srinitha2109/blog-app",
  },
  {
    title: "Weather App",
    description:
      " Developed a WeatherApp React component using OpenWeatherMap API to dynamically fetch and displayreal-time weather data for specific cities, including temperature, humidity, wind speed, and dynamic weathericons .",
    url: "https://github.com/Srinitha2109/Weather-app",
  },
  {
    title: "Resume using HTML and CSS",
    description:"This was my first project done in Workshop by Aadi Foundation",
    url: "https://github.com/Srinitha2109/My-Resume",
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