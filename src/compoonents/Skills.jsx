import React from 'react'

const skills = () => {
  return (
   
    <div id='skills'>
        <h1 className='font-bold text-5xl text-white underline'>My Skills</h1>
        <div className='flex'>
        <div className=" text-shadow-indigo-100 border-black px-5 py-4 mx-15 my-11 max-w-sm shadow-ig rounded-2xl bg-white p-6 h-148
        hover:-translate-y-3">
    <img className="w-full"src='webdev.jpg'></img>
    <h1 className='font-bold text-3xl'>Frontend Developement</h1>
    <p>
👋 Hi, I'm [Aniket]

I'm a Frontend Web Developer passionate about building interactive and responsive user interfaces. I specialize in:

<b>HTML</b>,

<b>CSS</b>,

<b>JavaScript</b>,

<b>React.js</b>


I love turning ideas into visually appealing,
<br/> user-friendly websites and web apps. 
<br/>I focus on clean code, performance, and modern<br/> design principles;
</p>
</div>


<div className=" text-shadow-indigo-100 border-black px-5 py-4 mx-15 my-11 max-w-sm shadow-ig rounded-2xl bg-white p-6 h-148 
hover:-translate-y-3">
    <img className="w-full"src='backend.jpg'></img>
    <h1 className='font-bold text-3xl'>Backend Developement</h1>
    <p className='text-lg'>
I'm<br/>
 I am a Backend Developer with hands-on experience in <b>Node.js</b>, <b>MongoDB </b>, and <b>the MERN stack</b>. I specialize in building robust APIs, server-side logic, and database architectures to power dynamic web applications. I love working with scalable backend systems and integrating them seamlessly with frontend interfaces.
</p>
</div>

<div className=" text-shadow-indigo-100 border-black px-5 py-4 mx-15 my-11 max-w-sm shadow-ig rounded-2xl bg-white p-6 h-148 
hover:-translate-y-3">
  <img src="DSA.jpg" />
    <h1 className='font-bold text-3xl'>DSA using Java</h1>
    <p className='text-lg'>I regularly solve Data Structures and Algorithms (DSA) problems using Java to improve my problem-solving skills and deepen my understanding of core computer science concepts.</p>
</div>

</div>
    </div>
  );
}

export default skills