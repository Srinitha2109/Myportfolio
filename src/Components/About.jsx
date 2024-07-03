/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a second year undergraduate studying at VNRVJIET. I'm a web developer experienced in both front-end and back-end development, with a passion for innovative solutions.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "HTML5", "CSS3", "MongoDB", "ReactJS", "NodeJS", "ExpressJS", "Bootstrap", "Material UI",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am Web Developer skilled in creating responsive, dynamic websites using HTML, CSS, JavaScript, and modern frameworks like React. Experienced in both front-end and back-end development, with a passion for innovative solutions.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
        <button style={{display:"block",margin:"auto",cursor:"pointer",background:"lightBlue",width:"180px" , border:"none",height:"42px",marginTop:"8px"}}><a href="https://srinitha2109.github.io/My-Resume/">See My profile</a></button>
      </div>
    </section>
  );
};

export default About;