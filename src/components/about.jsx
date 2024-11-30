import React from "react";
import AboutImage from "../assets/aboutme-image.png";
import SkillBar from "../components/skillBar";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
              <SkillBar skillName="HTML & CSS" proficiency="11/12" />
              <SkillBar skillName="React JS" proficiency="10/12" />
              <SkillBar skillName="Node JS" proficiency="9/12" />
              <SkillBar skillName="Spring Boot" proficiency="9/12" />
              <SkillBar skillName="MongoDB" proficiency="8/12" />
              <SkillBar skillName="MySQL" proficiency="9/12" />
              <SkillBar skillName="Git" proficiency="10/12" />
              <SkillBar skillName="Tailwind CSS" proficiency="11/12" />
              <SkillBar skillName="Bootstrap" proficiency="8/12" />
              <SkillBar skillName="Java" proficiency="10/12" />
              <SkillBar skillName="JavaScript" proficiency="9/12" />
              <SkillBar skillName="Python" proficiency="4/12" />
              <SkillBar skillName="C++" proficiency="8/12" />
              <SkillBar skillName="SQL" proficiency="7/12" />
              <SkillBar skillName="PostgreSQL" proficiency="5/12" />
              <SkillBar skillName="Firebase" proficiency="6/12" />
              <SkillBar skillName="Heroku" proficiency="7/12" />
              <SkillBar skillName="Netlify" proficiency="9/12" />
              <SkillBar skillName="Vercel" proficiency="9/12" />
              <SkillBar skillName="Docker" proficiency="9/12" />
              <SkillBar skillName="Kubernetes" proficiency="8/12" />
              <SkillBar skillName="Jenkins" proficiency="5/12" />
            </div>

            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  4+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  10+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
