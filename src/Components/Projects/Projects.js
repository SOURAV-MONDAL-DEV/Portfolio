import React from 'react';
import paint from '../../images/projects/paint.png'
import stove from '../../images/projects/stove.png'
import medi from '../../images/projects/medi.png'
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <div className='pb-20'>
            <p className='text-center text-4xl font-bold text-amber-500 m-10'> Some of my projects are there</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 '>

                <div className="border p-5 mx-auto card card-compact w-80 bg-base-100 shadow-xl mb-5">
                    <figure><img src={paint} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-2xl text-amber-500 py-3">Paint Hub</h2>
                        <p>For providing painting Order and Reviews</p>
                        <div className="flex justify-end">
                            <Link to='/project1' className="btn bg-green-500 px-1 text-black rounded">Details</Link>
                        </div>
                    </div>
                </div>
                <div className=" border p-5 mx-auto card card-compact w-80 bg-base-100 shadow-xl mb-5">
                    <figure><img src={stove} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-2xl text-amber-500 py-3">Stove World</h2>
                        <p>Buy and sell used stoves online</p>
                        <div className="flex justify-end">
                            <Link to='/project2' className="btn bg-green-500 px-1 text-black rounded">Details</Link>
                        </div>
                    </div>
                </div>
                <div className=" border p-5 mx-auto card card-compact w-80 bg-base-100 shadow-xl mb-5">
                    <figure><img src={medi} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-2xl text-amber-500 py-3">Medi Books</h2>
                        <p>Buy Medical Books as a Course</p>
                        <div className="flex justify-end">
                            <Link to='/project3' className="btn bg-green-500 px-1 text-black rounded">Details</Link >
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Projects;