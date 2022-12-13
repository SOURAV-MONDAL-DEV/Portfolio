import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import medi from '../../images/projects/medi.png'
import mediHome from '../../images/projects/mediHome.png'
import mediLog from '../../images/projects/mediLog.png'
import mediPhar from '../../images/projects/mediPhar.png' 

const Project3 = () => {
    return (
        <div className='md:grid grid-cols-3 gap-4'>
            <div className='m-10'>
                <h1 className='text-2xl font-bold my-10'>Project name: <span className='block text-amber-600 text-4xl font-bold'>Medi-Book</span></h1>
                <a className='block btn border rounded text-green-500 text-center p-1 m-1' href='https://medi-books-e5399.web.app/'>Show Live Site</a>
                <a className='block btn border rounded text-green-500 text-center p-1 m-1' href='https://github.com/SOURAVMONDAL-BD/medi-books-website'>GitHub Client Code</a>
                <a className='block btn border rounded text-green-500 text-center p-1 m-1' href='https://github.com/SOURAVMONDAL-BD/Medi-Books-server'>GitHub Server Code</a>
                <p className='text-2xl font-bold mt-10'>Feature and functionalities:</p>
                <p>1. The site is Single page Course Buying Website.</p>
                <p>2. Have a navigation bar and dedicated course page.</p>
                <p>3. Log in & Sign in authentication, private route.</p>
                <p>4. Technologies: React, Tailwind css, Daisy ui, Vercel, Firebase, Mongodb.</p>
            </div>
            <div className='col-span-2 flex flex-col justify-center'>
                <PhotoProvider>
                    <PhotoView src={medi}>
                        <img className='mr-5' src={medi} alt="paint"></img>
                    </PhotoView>
                </PhotoProvider>
                <div className='my-3 md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                    <div className="card m-1 card-compact w-64 bg-base-100 shadow-xl">
                        <figure><PhotoProvider>
                            <PhotoView src={mediHome}>
                                <img className='' src={mediHome} alt="paint"></img>
                            </PhotoView>
                        </PhotoProvider></figure>
                        <div className="card-body">
                        </div>
                    </div>
                    <div className="card m-1 card-compact w-64 bg-base-100 shadow-xl">
                        <figure><PhotoProvider>
                            <PhotoView src={mediLog}>
                                <img className='' src={mediLog} alt="paint"></img>
                            </PhotoView>
                        </PhotoProvider></figure>
                        <div className="card-body">
                        </div>
                    </div>
                    <div className="card m-1 card-compact w-64 bg-base-100 shadow-xl">
                        <figure><PhotoProvider>
                            <PhotoView src={mediPhar}>
                                <img className='' src={mediPhar} alt="paint"></img>
                            </PhotoView>
                        </PhotoProvider></figure>
                        <div className="card-body">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Project3;