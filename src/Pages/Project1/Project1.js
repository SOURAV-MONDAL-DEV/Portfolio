import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import paint from '../../images/projects/paint.png'
import paintAD from '../../images/projects/paintAD.png'
import paintFam from '../../images/projects/paintFam.png'
import paintLog from '../../images/projects/paintLog.png'
import paintMob from '../../images/projects/paintMob.png'
import paintSer from '../../images/projects/paintSer.png'

const Project1 = () => {
    return (
        <div className='md:grid grid-cols-3 gap-4'>
            <div className='m-10'>
                <h1 className='text-2xl font-bold my-10'>Project name: <span className='block text-amber-600 text-4xl font-bold'>Paint-Hub</span></h1>
                <a className='block btn border rounded text-green-500 text-center p-1 m-1' href='https://paint-service.web.app/'>Show Live Site</a>
                <a className='block btn border rounded text-green-500 text-center p-1 m-1' href='https://github.com/SOURAVMONDAL-BD/paint-service-client'>GitHub Client Code</a>
                <a className='block btn border rounded text-green-500 text-center p-1 m-1' href='https://github.com/SOURAVMONDAL-BD/paint-service-server'>GitHub Server Code</a>
                <p className='text-2xl font-bold my-10'>Feature and functionalities:</p>
                <p>1. Have a navigation bar to navigate deferent route.</p>
                <p>2. Have a dedicated services page.</p>
                <p>3. There are shown customer review.</p>
                <p>4. User can add his\her own review.</p>
                <p>5. customer can place order.</p>
            </div>
            <div className='col-span-2 flex flex-col justify-center'>
                <PhotoProvider>
                    <PhotoView src={paint}>
                        <img className='mr-5' src={paint} alt="paint"></img>
                    </PhotoView>
                </PhotoProvider>
                <div className='my-3 md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                    <div className="card m-1 card-compact w-64 bg-base-100 shadow-xl">
                        <figure><PhotoProvider>
                            <PhotoView src={paintAD}>
                                <img className='' src={paintAD} alt="paint"></img>
                            </PhotoView>
                        </PhotoProvider></figure>
                        <div className="card-body">
                        </div>
                    </div>
                    <div className="card m-1 card-compact w-64 bg-base-100 shadow-xl">
                        <figure><PhotoProvider>
                            <PhotoView src={paintFam}>
                                <img className='' src={paintFam} alt="paint"></img>
                            </PhotoView>
                        </PhotoProvider></figure>
                        <div className="card-body">
                        </div>
                    </div>
                    <div className="card m-1 card-compact w-64 bg-base-100 shadow-xl">
                        <figure><PhotoProvider>
                            <PhotoView src={paintLog}>
                                <img className='' src={paintLog} alt="paint"></img>
                            </PhotoView>
                        </PhotoProvider></figure>
                        <div className="card-body">
                        </div>
                    </div>
                    <div className="card m-1 card-compact w-64 bg-base-100 shadow-xl">
                        <figure><PhotoProvider>
                            <PhotoView src={paintMob}>
                                <img className='' src={paintMob} alt="paint"></img>
                            </PhotoView>
                        </PhotoProvider></figure>
                        <div className="card-body">
                        </div>
                    </div>
                    <div className="card m-1 card-compact w-64 bg-base-100 shadow-xl">
                        <figure><PhotoProvider>
                            <PhotoView src={paintSer}>
                                <img className='' src={paintSer} alt="paint"></img>
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

export default Project1;