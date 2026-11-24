
import React from 'react';

const Skills = () => {
  return (
    <div
      id="skills"
      className=" text-white px-4 sm:px-6 md:px-12 py-16"
    >
      {/* Section Title */}
      <h1 className="font-bold text-4xl sm:text-5xl text-white underline text-center mb-12">
        My Skills
      </h1>

      {/* Skills Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

        {/* Machine Learning */}
        <div className="w-full max-w-sm shadow-lg rounded-2xl bg-white text-gray-900 p-6 hover:-translate-y-3 transition-all duration-300">
          <img
            className="w-full h-48 object-cover mb-4 rounded-lg"
            src="ML.jpeg"
            alt="Machine Learning"
          />

          <h2 className="font-bold text-2xl sm:text-3xl mb-3 text-center">
            Machine Learning
          </h2>

          <p className="text-base sm:text-lg leading-relaxed">
            I am passionate about <b>Machine Learning</b> and building
            intelligent systems using data-driven approaches.

            <br /><br />

            I work with <b>Python</b>, <b>NumPy</b>, <b>Pandas</b>,
            <b> Matplotlib</b>, and <b>Scikit-learn</b>.

            <br /><br />

            I enjoy exploring ML algorithms, training predictive
            models, analyzing datasets, and developing practical
            AI-powered solutions.
          </p>
        </div>

        {/* Web Development */}
        <div className="w-full max-w-sm shadow-lg rounded-2xl bg-white text-gray-900 p-6 hover:-translate-y-3 transition-all duration-300">
          <img
            className="w-full h-48 object-cover mb-4 rounded-lg"
            src="webdev.jpg.jpeg"
            alt="Web Development"
          />

          <h2 className="font-bold text-2xl sm:text-3xl mb-3 text-center">
            Web Development
          </h2>

          <p className="text-base sm:text-lg leading-relaxed">
            I am a passionate <b>Full Stack Web Developer</b>
            focused on creating responsive, interactive, and
            user-friendly web applications.

            <br /><br />

            My tech stack includes <b>HTML</b>, <b>CSS</b>,
            <b> JavaScript</b>, <b>React.js</b>, <b>Node.js</b>,
            <b> Express.js</b>, and <b>MongoDB</b>.

            <br /><br />

            I enjoy building full-stack applications, developing
            REST APIs, and transforming ideas into real-world
            web solutions.
          </p>
        </div>

        {/* DSA & Problem Solving */}
        <div className="w-full max-w-sm shadow-lg rounded-2xl bg-white text-gray-900 p-6 hover:-translate-y-3 transition-all duration-300">
          <img
            className="w-full h-48 object-cover mb-4 rounded-lg"
            src="DSA.jpeg"
            alt="DSA and Problem Solving"
          />

          <h2 className="font-bold text-2xl sm:text-3xl mb-3 text-center">
            DSA & Problem Solving
          </h2>

          <p className="text-base sm:text-lg leading-relaxed">
            I regularly practice <b>Data Structures and Algorithms</b>
            using <b>Java</b> to improve my logical thinking and
            problem-solving skills.

            <br /><br />

            I focus on concepts like <b>Arrays</b>, <b>Linked Lists</b>,
            <b> Stacks</b>, <b>Queues</b>, <b>Trees</b>,
            <b> Graphs</b>, and <b>Dynamic Programming</b>.

            <br /><br />

            I consistently solve coding challenges on <b>LeetCode</b>
            to strengthen my algorithmic thinking and prepare
            for technical interviews.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Skills;

