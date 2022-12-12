import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import signPic from "../../images/sign.png"


const Footer = () => {
    return (
        <div>
            <footer className="footer text-center p-10 bg-black text-white rounded ">
                <div className="grid grid-flow-col gap-4 w-96 mx-auto mb-10">
                    <Link href="/" className="link link-hover">Resume</Link>
                    <Link to="/contact" className="link link-hover">Contact Me</Link>
                    <Link href="/" className="link link-hover">About Me</Link>
                    {/* <a href="/" className="link link-hover">Press kit</a> */}
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <a className='m-4 text-4xl text-center' href='https://github.com/SOURAVMONDAL-BD'><FaGithub className=' mx-auto'></FaGithub><p className='text-sm'>GitHub</p></a>
                        <a className='m-4 text-4xl text-center' href='https://www.linkedin.com/in/sourav-mondal-63ba26259/'><FaLinkedin className=' mx-auto'></FaLinkedin><p className='text-sm'>Linkedin</p></a>
                        
                    </div>
                </div>
                <div>
                    <img src={signPic} width="" height="" className=" w-1/4 inline-block fill-current" alt='Stove World'></img>
                </div>
                    <div>
                        <p>Copyright © 2022 - All right reserved by SOURAV MONDAL.</p>
                    </div>
            </footer>
        </div>
    );
};

export default Footer;