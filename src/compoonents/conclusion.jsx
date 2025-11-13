import React from 'react';

const Conclusion = () => {
  return (
    <div className="px-4 py-8 md:px-12 lg:px-24 space-y-6 w-screen h-93 mx-100">
      <h1 className="text-3xl md:text-4xl lg:text-5xl underline text-white mx-45">
        What I Do
      </h1>
      <ul className="list-disc list-inside text-base md:text-lg text-white space-y-3">
        <li>Build responsive and interactive user interfaces with React.js and Next.js</li>
        <li>Develop backend APIs and server logic using Node.js</li>
        <li>Integrate RESTful services and ensure seamless frontend-backend connectivity</li>
        <li>Optimize performance and maintain clean, reusable code</li>
      </ul>
    </div>
  );
};

export default Conclusion;
