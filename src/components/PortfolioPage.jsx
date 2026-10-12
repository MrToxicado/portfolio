import React from "react";
import profileImage from "../assets/images/profile2.jpeg";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-32 pb-40 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 justify-center font-mono">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-3xl font-bold mb-12">WHO AM I?</h2>
          <p className="text-lg leading-loose">
            Hey, I am <span className="text-orange-400 font-bold tracking-wide">Yuvraj :) </span> <br />
            I'm a Software Engineer with 4+ years of experience developing and maintaining scalable SaaS applications, responsive web interfaces, and robust REST APIs.<br />
            Currently working as a <span className="text-teal-400 font-semibold">Software Developer at ANNEX LIFE</span>, with previous experience as a <span className="text-blue-400 font-semibold">Software Engineer at One.com</span>.<br />
            I specialize in full-stack architecture working across technologies like React.js, TypeScript, JavaScript, Node.js, Express.js, Java, Spring Boot, MySQL, PostgreSQL, CockroachDB, Redis, Docker, and AWS.<br />
            I am passionate about building scalable, high-performance systems, modernizing legacy applications, and integrating AI-powered features that drive user engagement and developer efficiency.<br />
            Apart from coding, I like travelling, playing cricket, badminton, and working out.
            I'm always open to new connections and conversations. Feel free to reach out!
          </p>
        </div>
        <div className="flex items-center overflow-hidden">
          <img
            src={profileImage}
            alt="Profile"
            className="h-80 w-80 object-contain rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
