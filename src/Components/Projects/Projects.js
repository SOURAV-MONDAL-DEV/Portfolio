import React from 'react';
import paint from '../../images/projects/paint.png'
import stove from '../../images/projects/stove.png'
import medi from '../../images/projects/medi.png'


const Projects = () => {
    return (
        <div>
            <p>This is projects section</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>

                <div className=" mx-auto card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={paint} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Paint Hub</h2>
                        <p>For providing painting Order and Reviews</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={stove} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>Buy and sell used stoves online</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto card card-compact w-80 bg-base-100 shadow-xl">
                    <figure><img src={medi} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>Buy Medical Books as a Course</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Projects;