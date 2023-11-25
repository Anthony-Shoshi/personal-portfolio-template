import banner from "../assets/banner.png";

const Home = () => {
    return (
        <div className="bg-bg-shade mt-20">
            <div className="lg:px-12 px-4 flex flex-col md:flex-row items-center justify-between gap-5 py-24">
                <div className="w-full md:w-1/2 mt-5">
                    <h3 className="text-xl mb-5 font-semibold text-heading-color">Hey, I am John</h3>
                    <h1 className="md:text-6xl text-4xl font-bold leading-snug mb-5 md:leading-[76px] text-heading-color">I create <span className="text-primary">product design</span> and brand experience</h1>
                    <p className="text-body text-2xl leading-9 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    <button className="btn-primary">Get In Touch</button>
                </div>
                <div className="md:w-1/2 w-full">
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </div>
    );
}

export default Home