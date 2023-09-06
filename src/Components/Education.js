import React from 'react'
import rcm1 from "./Asse/rcm1.jpg"
import jaya from "./Asse/jaya.jpeg"
import ethi from "./Asse/ethi.jpg"
import greems from "./Asse/greems.jpeg"

function EducationCard({ institution, degree, year,img }) {
    return (
      <div className="education-card">
        <img src={img} alt="Institution Logo" className='Education-img' style={{ width:"300px", height:"300px" }} />
        <br/>
        <div className='Education-content'><h3>{institution}</h3>
        <br/>
        <p>{degree}</p>
        <br/>
        <p>Year: {year}</p></div>
        <br/>
      </div>
    );
  }

const educationData = [
  {img:rcm1,
    institution: 'RCM Group of School',
    degree: '1-12th',
    year: '2002-2017',
  },
  {img:jaya,
    institution: 'Jaya College of arts and science',
    degree: 'B.Sc-Physics',
    year: '2017 - 2020'},
    {
    img:ethi,
    institution: 'Ethiraj College for Women',
    degree: 'M.Sc-Physics',
    year: '2020-2022',
  },
  {img:greems,
    institution: 'Greens Technology',
    degree: 'Full Stack Development',
    year: '2023 - 2023',
  },
  // Add more education entries as needed
];

function Education() {
  return (
    <section id='Education'>
    <div className="education">
      <h2>Education</h2>
      <div className="education-cards">
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            img={edu.img}
            institution={edu.institution}
            degree={edu.degree}
            year={edu.year}
          />
        ))}
      </div>
    </div>
    </section>
  );
}

export default Education;
