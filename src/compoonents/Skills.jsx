import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="bg-[#0b1320] text-white px-4 sm:px-6 md:px-12 py-12">
      {/* Section Title */}
      <h1 className="font-bold text-4xl sm:text-5xl text-white underline text-center mb-12">
        My Skills
      </h1>

      {/* Skill Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        
        {/* Frontend Card */}
        <div className="w-full max-w-sm shadow-lg rounded-2xl bg-white text-gray-900 p-6 hover:-translate-y-3 transition-transform duration-300">
          <img
            className="w-full h-48 object-cover mb-4 rounded-lg"
            src="webdev.jpg"
            alt="Frontend Development"
          />
          <h2 className="font-bold text-2xl sm:text-3xl mb-2 text-center">Frontend Development</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            👋 Hi, I'm <b>Aniket</b> — a passionate Frontend Web Developer focused on building interactive and responsive user interfaces.  
            <br />
            I specialize in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React.js</b>.  
            <br />
            I love turning ideas into visually appealing, user-friendly web experiences with clean code and performance in mind.
          </p>
        </div>

        {/* Backend Card */}
        <div className="w-full max-w-sm shadow-lg rounded-2xl bg-white text-gray-900 p-6 hover:-translate-y-3 transition-transform duration-300">
          <img
            className="w-full h-48 object-cover mb-4 rounded-lg"
            src="backend.jpg"
            alt="Backend Development"
          />
          <h2 className="font-bold text-2xl sm:text-3xl mb-2 text-center">Backend Development</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            I’m a Backend Developer experienced in <b>Node.js</b>, <b>MongoDB</b>, and the <b>MERN stack</b>.  
            <br />
            I design APIs, manage server logic, and build scalable architectures that seamlessly integrate with front-end systems.
          </p>
        </div>

        {/* DSA Card */}
        <div className="w-full max-w-sm shadow-lg rounded-2xl bg-white text-gray-900 p-6 hover:-translate-y-3 transition-transform duration-300">
          <img
            className="w-full h-48 object-cover mb-4 rounded-lg"
            src="DSA.jpg"
            alt="DSA using Java"
          />
          <h2 className="font-bold text-2xl sm:text-3xl mb-2 text-center">DSA using Java</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            I consistently practice <b>Data Structures & Algorithms</b> using Java to sharpen my problem-solving abilities and strengthen my grasp of core computer science principles.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
