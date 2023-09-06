
import React from 'react';
import img from "./Asse/HEMALADHA PHOTO.jpg"


export function About() {
  return (
    <section id="about" >
      <h2>About Me</h2>
      <div className='container'>
        <div id='Aboutdiv1'>
          <img src={img} className='image' style={{ height: "450px", justifyContent: "center", margin: "auto",borderRadius:"25%" }} />

        </div>
        <div id='Aboutdiv2'>
          <p className='animated-text' >

            <p > <strong>HEMALADHA MURUGAN</strong> </p>
            <p> <bold>(Full stack Developer)</bold> </p>
            <p>I am a Full-Stack developer based in Pune, India.
              I have completed a full stack development course
              from greens technology chennai. I am very passionate
              about improving my coding skills & websites. Working
               for myself to improve my skills.Love to build Full-Stack
               clones.
              email:<br/>
              <a href="mailto:hemaladhamurugan41099@gmail.com">email:hemaladhamurugan41099@gmail.com</a><br/>
              Place : Pune, India - 412206</p>
            <button href="" className='my-button'>Resume</button>


          </p>

        </div>
      </div>
    </section>
  );
}

export default About;