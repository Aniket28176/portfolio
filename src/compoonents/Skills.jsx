import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="px-6 md:px-12 py-10">
      <h1 className="font-bold text-5xl text-white underline text-center mb-10">My Skills</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        
        <div className="max-w-sm shadow-lg rounded-2xl bg-white p-6 hover:-translate-y-3 transition-transform duration-300">
          <img className="w-full mb-4 rounded-lg" src="webdev.jpg" alt="Frontend Development" />
          <h2 className="font-bold text-3xl mb-2">Frontend Development</h2>
          <p className="text-lg">
            👋 Hi, I'm [Aniket]<br/>
            I'm a Frontend Web Developer passionate about building interactive and responsive user interfaces. I specialize in:
            <br/><b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React.js</b>.
            <br/>I love turning ideas into visually appealing, user-friendly websites and web apps, focusing on clean code, performance, and modern design principles.
          </p>
        </div>

        <div className="max-w-sm shadow-lg rounded-2xl bg-white p-6 hover:-translate-y-3 transition-transform duration-300">
          <img className="w-full mb-4 rounded-lg" src="backend.jpg" alt="Backend Development" />
          <h2 className="font-bold text-3xl mb-2">Backend Development</h2>
          <p className="text-lg">
            I'm a Backend Developer with hands-on experience in <b>Node.js</b>, <b>MongoDB</b>, and <b>the MERN stack</b>. 
            I specialize in building robust APIs, server-side logic, and database architectures to power dynamic web applications. 
            I love working with scalable backend systems and integrating them seamlessly with frontend interfaces.
          </p>
        </div>

        <div className="max-w-sm shadow-lg rounded-2xl bg-white p-6 hover:-translate-y-3 transition-transform duration-300">
          <img className="w-full mb-4 rounded-lg" src="DSA.jpg" alt="DSA using Java" />
          <h2 className="font-bold text-3xl mb-2">DSA using Java</h2>
          <p className="text-lg">
            I regularly solve Data Structures and Algorithms (DSA) problems using Java to improve my problem-solving skills and deepen my understanding of core computer science concepts.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
