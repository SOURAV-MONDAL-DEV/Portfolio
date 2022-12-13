import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import stove from '../../images/projects/stove.png'
import stoveAP from '../../images/projects/stoveAP.png'
import stoveCat from '../../images/projects/stoveCat.png'
import stoveMob from '../../images/projects/stoveMob.png'
import stoveSD from '../../images/projects/stoveSD.png'


const Project2 = () => {
    return (
        <div className='md:grid grid-cols-3 gap-4'>
        <div className='m-10'>
            <h1 className='text-2xl font-bold my-10'>Project name: <span className='block text-amber-600 text-4xl font-bold'>Stove-World</span></h1>
            <a className='block btn border rounded text-green-500 text-center p-1 m-1' href='https://stove-world-sm.web.app/'>Show Live Site</a>
            <a className='block btn border rounded text-green-500 text-center p-1 m-1' href='https://github.com/SOURAVMONDAL-BD/stoves-world-client'>GitHub Client Code</a>
            <a className='block btn border rounded text-green-500 text-center p-1 m-1' href='https://github.com/SOURAVMONDAL-BD/stoves-world-server'>GitHub Server Code</a>
            <p className='text-2xl font-bold my-10'>Feature and functionalities:</p>
            <p>1. This site is created and building for buying and selling used stoves.</p>
            <p>2. There are three types categories for Products.</p>
            <p>3. There are three types of User like- Seller, Buyer and Admin.</p>
            <p>4. Technologies: React, Tailwind css, Daisy ui, Vercel, Firebase, Mongodb.</p>
        </div>
        <div className='col-span-2 flex flex-col justify-center'>
            <PhotoProvider>
                <PhotoView src={stove}>
                    <img className='mr-5' src={stove} alt="paint"></img>
                </PhotoView>
            </PhotoProvider>
            <div className='my-3 md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                <div className="card m-1 card-compact w-64 bg-base-100 shadow-xl">
                    <figure><PhotoProvider>
                        <PhotoView src={stoveAP}>
                            <img className='' src={stoveAP} alt="paint"></img>
                        </PhotoView>
                    </PhotoProvider></figure>
                    <div className="card-body">
                    </div>
                </div>
                <div className="card m-1 card-compact w-64 bg-base-100 shadow-xl">
                    <figure><PhotoProvider>
                        <PhotoView src={stoveCat}>
                            <img className='' src={stoveCat} alt="paint"></img>
                        </PhotoView>
                    </PhotoProvider></figure>
                    <div className="card-body">
                    </div>
                </div>
                <div className="card m-1 card-compact w-64 bg-base-100 shadow-xl">
                    <figure><PhotoProvider>
                        <PhotoView src={stoveMob}>
                            <img className='' src={stoveMob} alt="paint"></img>
                        </PhotoView>
                    </PhotoProvider></figure>
                    <div className="card-body">
                    </div>
                </div>
                <div className="card m-1 card-compact w-64 bg-base-100 shadow-xl">
                    <figure><PhotoProvider>
                        <PhotoView src={stoveSD}>
                            <img className='' src={stoveSD} alt="paint"></img>
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

export default Project2;