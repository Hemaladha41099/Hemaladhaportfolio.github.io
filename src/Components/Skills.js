
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHtml5, faCss3, faBootstrap, faJs, faReact, faJava, faGithub } from '@fortawesome/free-brands-svg-icons';
// function SkillCard({ logo, skill }) {
//   return (
//     <div className="Skill-card">
//       < FontAwesomeIcon  src={} alt="Skill Logo" className='Skill-logo' />
//       <div className='Education-content'>
//         <p>{skill}</p>
//       </div>
//     </div>
//   );
// }

// function Skills() {
//   const skillsList = [
//     { logo: faHtml5 , skill: "HTML" },
//     { logo: faCss3, skill: "CSS" },
//     { logo: faBootstrap, skill: "Bootstrap" },
//     { logo: faJs, skill: "JavaScript" },
//     {logo:'',skill:"React Js"},
//     {logo:'',skill:'Core java'},
//     {logo:'',skill:'Springboot'},
//     {logo:'',skill:"Hibernate"}
//   ,{logo:'',skill:"SQL"},
//   {logo:'',skill:"Git"}
//   ,{logo:ImHtmlFive,skill:"GitHub"}, 
//     // Add other skills with their logos here
//   ];

//   return (
//     <section id='Skills'>
//       <div className="skills-card">
//         <h2>Skills</h2>
//         {skillsList.map((skill, index) => (
//           <SkillCard key={index} logo={skill.logo} skill={skill.skill} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faBootstrap, faJs, faReact, faJava, faGithub, faGgCircle } from '@fortawesome/free-brands-svg-icons';
import icon1 from "./Asse/sql.webp"

function SkillCard({ icon, skill }) {
  return (
    <div className="Skill-card">
      <FontAwesomeIcon icon={icon} className='Skill-icon' size="4x" />
      <div className='Skills-content'>
        <p>{skill}</p>
      </div>
    </div>
  );
}

function Skills() {
  const skillsList = [
    { icon: faHtml5 , skill: "HTML" },
    { icon: faCss3, skill: "CSS" },
    { icon: faBootstrap, skill: "Bootstrap" },
    { icon: faJs, skill: "JavaScript" },
    { icon: faReact, skill: "React Js" },
    { icon: faJava, skill: "Core Java" },
    { icon: faJava, skill: "Spring Boot" },
    { icon: faJava, skill: "Hibernate" },
    { icon: faGgCircle , skill: "SQL" },
    { icon: faGithub, skill: "GitHub" },
    // Add other skills with their icons here
  ];

  return (
    <section id='Skills'>
       <h2>Skills</h2>
      <div className="skills-card">
       
        <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} skill={skill.skill} />
        ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

