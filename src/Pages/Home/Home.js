import React from 'react';
import Projects from '../../Components/Projects/Projects';
import Skills from '../../Components/Skills/Skills';
import picture from "../../images/codeimg.png"

const Home = () => {


    const onButtonClick = () => {

        console.log('btn cli');
        // using Java Script method to get PDF file
        fetch('Sourav_Mondal_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Sourav_Mondal_Resume.pdf';
                alink.click();
            })
        })
    }


    return (
        <div>
            <div className=' m-20 md:flex justify-between'>
                <div>
                    <h1 className='text-4xl  md:text-6xl text-rose-600 font-bold mt-20 '>SOURAV MONDAL</h1>
                    <p className='text-amber-500 text-2xl font-semibold'>Front end Web Developer</p>
                    <p>Hey, I'm Sourav Mondal. A junior front-end MERN stack web developer. And this is my personal portfolio website</p>
                    <div className='flex justify-end mx-20'><button onClick={onButtonClick} className="text-xl bg-amber-600 rounded-lg p-2 py-1 my-5">⭳ Resume</button></div>
                </div>
                <div>
                    <img src={picture} alt="img" ></img>
                </div>
            </div>
            <div>
                <Projects></Projects>
            </div>
            <div>
                <Skills></Skills>
            </div>
        </div>
    );
};

export default Home;