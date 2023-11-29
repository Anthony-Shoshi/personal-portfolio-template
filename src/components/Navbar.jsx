import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";

import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY > 0) {
                setIsSticky(true);
            }
        }

        window.addEventListener("scroll", handleScroll);

    }, []);

    return (
        <header className="w-full fixed top-0 left-0 right-0 z-10">
            <nav className={`py-4 px-4 md:px-12 bg-white shadow-md ${isSticky ? "sticky top-0 left-0 right-0 bg-white" : ""}`}>
                <div className="flex justify-between items-center">
                    <div className="cursor-pointer">
                        <Link to="home" spy={true} smooth={true} offset={-100}>
                            <img src={logo} alt="Logo" className="h-10" />
                        </Link>
                    </div>
                    <div className="lg:flex hidden items-center gap-3 text-body">
                        <Link to="home" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Home</Link>
                        <Link to="portfolio" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Portfolio</Link>
                        <Link to="about" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">About Me</Link>
                        <Link to="testimonial" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Testimonials</Link>
                        <Link to="contact" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Contact</Link>
                    </div>
                    <div className="lg:block hidden">
                        <button className="outlineButton">
                            Contact Me
                        </button>
                    </div>
                    <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
                        <GiHamburgerMenu />
                    </button>
                </div>

                {
                    isMenuOpen && <div className="bg-body rounded mt-4 text-white lg:hidden">
                        <Link to="home" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Home</Link>
                        <Link to="portfolio" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Portfolio</Link>
                        <Link to="about" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">About Me</Link>
                        <Link to="testimonial" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Testimonials</Link>
                        <Link to="contact" spy={true} smooth={true} offset={-100} activeClass="active" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Contact</Link>
                    </div>
                }
            </nav>
        </header>
    );
}

export default Navbar