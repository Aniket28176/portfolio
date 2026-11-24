
import React from 'react';
import {
  Brain,
  Code2,
  Database,
  Lightbulb,
  Cpu,
  Rocket
} from 'lucide-react';

const Conclusion = () => {
  const services = [
    {
      icon: <Brain size={28} />,
      title: "Machine Learning",
      description:
        "Build intelligent machine learning models, analyze datasets, and develop predictive solutions using Python and Scikit-learn."
    },
    {
      icon: <Code2 size={28} />,
      title: "Web Development",
      description:
        "Develop modern, responsive, and interactive web applications using React.js, JavaScript, and Tailwind CSS."
    },
    {
      icon: <Database size={28} />,
      title: "Backend Development",
      description:
        "Build RESTful APIs, manage databases, implement authentication, and develop backend systems using Node.js and MongoDB."
    },
    {
      icon: <Cpu size={28} />,
      title: "AI Integration",
      description:
        "Integrate AI APIs and machine learning capabilities into web applications to create smarter digital experiences."
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Problem Solving",
      description:
        "Practice Data Structures and Algorithms using Java to improve logical thinking and solve complex programming problems."
    },
    {
      icon: <Rocket size={28} />,
      title: "Project Development",
      description:
        "Transform ideas into practical projects by combining frontend, backend, and AI/ML technologies."
    }
  ];

  return (
    <section className="px-5 sm:px-8 md:px-12 lg:px-20 py-16 text-white">

      {/* Heading */}
      <div className="text-center mb-12">

        <h1 className="text-4xl md:text-5xl font-bold">
          What I <span className="text-purple-400">Do</span>
        </h1>

        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-300 mt-5 max-w-2xl mx-auto leading-relaxed">
          I combine creativity, programming, and problem-solving
          to build intelligent applications and meaningful digital solutions.
        </p>

      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((service, index) => (

          <div
            key={index}
            className="bg-purple-500/10 border border-purple-400/20
            rounded-2xl p-7 shadow-lg
            hover:bg-purple-500/20 hover:border-purple-400/60
            hover:-translate-y-2 transition-all duration-300"
          >

            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center
            rounded-xl bg-purple-500/20 text-purple-400 mb-5">
              {service.icon}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-3">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 leading-7 text-sm sm:text-base">
              {service.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Conclusion;

