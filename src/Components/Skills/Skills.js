import React from 'react';

const Skills = () => {
    return (
        <div className='m-10'>
            <h1 className='text-center text-2xl font-bold'>The skills I have</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5'>

                <div className=" p-5 m-2 mx-auto card card-compact w-32 bg-base-100 shadow-xl">
                    <figure><img src="https://cdn.cdnlogo.com/logos/h/84/html.svg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center text-bold text-2xl py-3">HTML 5</h2>
                    </div>
                </div>
                <div className=" p-5 m-2 mx-auto card card-compact w-32 bg-base-100 shadow-xl">
                    <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center text-bold text-2xl py-3">CSS 3</h2>
                    </div>
                </div>
                <div className=" p-5 m-2 mx-auto card card-compact w-32 bg-base-100 shadow-xl">
                    <figure><img className='w-10/12' src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center text-bold text-2xl py-3">JavaScript</h2>
                    </div>
                </div>
                <div className=" p-5 m-2 mx-auto card card-compact w-32 bg-base-100 shadow-xl">
                    <figure><img  className='mt-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center text-bold text-2xl py-3">Bootstrap</h2>
                    </div>
                </div>
                <div className=" p-5 m-2 mx-auto card card-compact w-32 bg-base-100 shadow-xl">
                    <figure><img className='mt--2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center text-bold text-2xl py-3">Tailwind</h2>
                    </div>
                </div>
                <div className=" p-5 m-2 mx-auto card card-compact w-32 bg-base-100 shadow-xl">
                    <figure><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center text-bold text-2xl py-3">React.js</h2>
                    </div>
                </div>
                <div className=" p-5 m-2 mx-auto card card-compact w-32 bg-base-100 shadow-xl">
                    <figure><img className='mb-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center text-bold text-2xl py-3">Node.js</h2>
                    </div>
                </div>
                <div className=" p-5 m-2 mx-auto card card-compact w-32 bg-base-100 shadow-xl">
                    <figure><img className='w-3/4' src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center text-bold text-2xl py-3">MongoDB</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;