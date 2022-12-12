import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer text-center p-10 bg-black text-white rounded ">
                <div className="grid grid-flow-col gap-4 w-96 mx-auto">
                    <a href="/" className="link link-hover">About us</a>
                    <a href="/" className="link link-hover">Contact</a>
                    <a href="/" className="link link-hover">Jobs</a>
                    <a href="/" className="link link-hover">Press kit</a>
                </div>
                <div>
                    <div className="flex justify-center">
                        <a className='m-4 text-4xl' href='#'><FaGithub></FaGithub></a>
                        <a className='m-4 text-4xl' href='#'><FaLinkedin></FaLinkedin></a>
                        
                    </div>
                </div>
                <div>
                    <img src='../../../img/logo.png' width="50" height="50" className="inline-block fill-current" alt='Stove World'></img>
                    <p className="font-bold">
                    Stove World Ltd. <br/>Providing reliable Services since 2010
                    </p>
                </div>
                    <div>
                        <p>Copyright © 2022 - All right reserved by The Stove World Ltd.</p>
                    </div>
            </footer>
        </div>
    );
};

export default Footer;