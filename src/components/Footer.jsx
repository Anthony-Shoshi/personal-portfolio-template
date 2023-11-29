import React from 'react'
import logo from "../assets/logo.svg";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='bg-bg-shade py-10 my-10 md:px-16 px-4'>
            <div className='flex flex-col md:flex-row md:items-center justify-between mb-20 '>
                <div className="cursor-pointer">
                    <Link to="home" spy={true} smooth={true} offset={-100}>
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className='flex flex-col md:flex-row md:items-center flex-wrap gap-5 md:mt-0 mt-10'>
                    <Link to="home" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Home</Link>
                    <Link to="portfolio" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Portfolio</Link>
                    <Link to="about" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">About me</Link>
                    <Link to="testimonial" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Testimonials</Link>
                    <Link to="contact" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Contact</Link>
                </div>
                <div className='flex items-center gap-4 ml-4 md:mt-0 mt-10'>
                    <FaFacebookF className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary' />
                    <FaInstagram className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary' />
                    <FaTwitter className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary' />
                    <FaLinkedin className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary' />
                </div>
            </div>
            <hr />
            <div className='flex flex-col md:flex-row justify-between gap-8 my-10'>
                <p>Made with 💖 by Anthony</p>
                <div className='space-x-6'>
                    <a href="/" className='hover:text-slate-400'>Privacy Policy</a>
                    <a href="/" className='hover:text-slate-400'>Terms of Service</a>
                    <a href="/" className='hover:text-slate-400'>Cookies Settings</a>
                </div>
            </div>
        </div>
    )
}

export default Footer