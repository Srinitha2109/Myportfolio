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

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 *

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */

const Education = () => {
  return (
    <section className="padding" id="education">
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
        <h2>Education</h2>
        <p style={{textAlign:"center", fontWeight:"400", marginBottom:'0px'}}>{"VNRVJIET"}</p>
        <p style={{textAlign:"center", marginTop:"5px"}}>{"B.Tech - Information Technology"}</p>
        <p style={{textAlign:"center", marginTop:"5px"}}>{"CGPA - 9.46"}</p>
        <hr />
        <p style={{textAlign:"center", fontWeight:"400", marginBottom:'0px'}}>{"Narayana Junior College"}</p>
        <p style={{textAlign:"center", marginTop:"5px"}}>{"Intermediate - MPC"}</p>
        <p style={{textAlign:"center", marginTop:"5px"}}>{"Percentage - 99%"}</p>
      </div>
    </section>
  );
};

export default Education;