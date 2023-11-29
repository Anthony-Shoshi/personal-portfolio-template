import { useEffect } from "react";
import { useState } from "react";

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
                        <img src={logo} alt="Logo" className="h-10" />
                    </div>
                    <div className="lg:flex hidden items-center gap-3 text-body">
                        <a href="" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Home</a>
                        <a href="" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Portfolio</a>
                        <a href="" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">About Me</a>
                        <a href="" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Testimonials</a>
                        <a href="" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Contact</a>
                    </div>
                    <div className="lg:block hidden">
                        <button className="outlineButton">
                            Contact Me
                        </button>
                    </div>
                    {/* menu button for mobile */}
                    <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
                        <GiHamburgerMenu />
                    </button>
                </div>

                {
                    isMenuOpen && <div className="bg-body rounded mt-4 text-white lg:hidden">
                        <a href="" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Home</a>
                        <a href="" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Portfolio</a>
                        <a href="" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">About Me</a>
                        <a href="" className="block py-2 px-4 hover:text-gray-400 font-roboto cursor-pointer">Testimonials</a>
                    </div>
                }
            </nav>
        </header>
    );
}

export default Navbar