import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='bg-black md:grid grid-cols-3 gap-4'>
            <div className='col-span-2'>
                <h1 className='text-center m-10 text-xl '>Please fill the contact form to email me.</h1>
                <div class=" mx-auto pb-20 w-full max-w-xs">
                    <form class=" shadow-md border rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Enter your email
                            </label>
                            <input class="bg-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" required></input>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                                Your Name
                            </label>
                            <input class="bg-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="name" type="name" placeholder="name" required></input>
                        </div>
                        {/* <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                            Your Phone
                        </label>
                        <input class="bg-black shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="phone" placeholder="phone" required></input>
                    </div> */}
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                                Your message
                            </label>
                            <textarea name="message" className="bg-black border rounded  py-2 px-3  textarea text-gray-700 textarea-bordered h-24 w-full" id='message' type="message" placeholder="Your message" required></textarea>
                        </div>
                        <div className='flex justify-end'><button className='btn border rounded p-1 bg-white text-black '>Send email</button></div>

                    </form>
                </div>
            </div>
            <div>
            <div className='m-10 '>
                <h1 className='text-2xl font-bold my-10'>My Other Links</h1>
                <button className=' min-w-[40%] flex items-center m-2 btn border rounded text-green-500 text-center p-1 m-1'><FaGithub></FaGithub><a className='px-2 ' href='https://github.com/SOURAVMONDAL-BD/'> My GitHub</a></button>
                <button className=' min-w-[40%] flex items-center m-2 btn border rounded text-green-500 text-center p-1 m-1'><FaLinkedin></FaLinkedin><a className='px-2 ' href='https://www.linkedin.com/in/sourav-mondal-63ba26259/'> My Linkedin</a></button>                
            </div>
            </div>
        </div>
    );
};

export default Contact;