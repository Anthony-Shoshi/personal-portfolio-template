import about from "../assets/about.png";

const About = () => {
    return (
        <div className="lg:mx-12 mx-4 mb-32" id="about">
            <div className="flex flex-col sm:flex-row gap-12 items-center justify-between">
                <div className="lg:w-1/2 w-full">
                    <img src={about} alt="about" />
                </div>
                <div className="lg:w-1/2 w-full">
                    <h3 className="text-heading-color text-xl font-semibold mb-5">About</h3>
                    <h1 className="text-heading-color md:text-6xl text-2xl font-bold mb-5">About Me</h1>
                    <p className="text-body sm:mt-12 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                        <br /> <br />
                        Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
                </div>
            </div>
        </div>
    );
}

export default About;