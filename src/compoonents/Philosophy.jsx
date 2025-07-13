import React from 'react';
import { Lightbulb, RefreshCcw, Users } from 'lucide-react';

const Philosophy = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-5xl md:text-4xl font-bold text-center mb-10 border-b-4 border-blue-500"> My Philosophy</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Innovation */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="flex justify-center mb-4">
            <Lightbulb className="text-blue-500 w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Innovation</h3>
          <p className="text-gray-600">
            I believe in thinking outside the box and finding creative solutions to complex <strong>problems</strong>. Innovation isn’t just about using new technologies—it’s about using the right technologies in the right way.
          </p>
        </div>

        {/* Continuous Learning */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="flex justify-center mb-4">
            <RefreshCcw className="text-blue-500 w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
          <p className="text-gray-600">
            The tech landscape evolves rapidly, and I’m committed to growing with it. I dedicate time each week to learning new skills, exploring emerging technologies, and refining my existing knowledge.
          </p>
        </div>

        {/* Collaboration */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="flex justify-center mb-4">
            <Users className="text-blue-500 w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Collaboration</h3>
          <p className="text-gray-600">
            I firmly believe that the best solutions come from diverse perspectives working together. Effective communication and collaborative problem-solving are essential to creating exceptional software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;