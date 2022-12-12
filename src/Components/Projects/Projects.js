import React from 'react';
import paint from '../../images/projects/paint.png'
import stove from '../../images/projects/stove.png'
import medi from '../../images/projects/medi.png'


const Projects = () => {
    return (
        <div className='pb-20'>
            <p>This is projects section</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 '>

                <div className="border p-5 mx-auto card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={paint} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-bold text-2xl py-3">Paint Hub</h2>
                        <p>For providing painting Order and Reviews</p>
                        <div className="flex justify-end">
                            <button className="btn bg-green-500 px-1 rounded">Details</button>
                        </div>
                    </div>
                </div>
                <div className=" border p-5 mx-auto card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={stove} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-bold text-2xl py-3">Stove World</h2>
                        <p>Buy and sell used stoves online</p>
                        <div className="flex justify-end">
                            <button className="btn bg-green-500 px-1 rounded">Details</button>
                        </div>
                    </div>
                </div>
                <div className=" border p-5 mx-auto card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={medi} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-bold text-2xl py-3">Medi Books</h2>
                        <p>Buy Medical Books as a Course</p>
                        <div className="flex justify-end">
                            <button className="btn bg-green-500 px-1 rounded">Details</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Projects;