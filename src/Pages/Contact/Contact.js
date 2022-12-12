import React from 'react';

const Contact = () => {
    return (
        <div className='bg-black'>
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
    );
};

export default Contact;