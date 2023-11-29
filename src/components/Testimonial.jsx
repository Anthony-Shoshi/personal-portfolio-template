import ReviewCard from "./ReviewCard";

const Testimonial = () => {
    return (
        <div className="lg:px-12 px-4 my-32 py-32 bg-bg-shade" id="testimonial">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div>
                    <h3 className="text-heading-color text-xl font-semibold mb-5">Clients Feedback</h3>
                    <h1 className="text-heading-color md:text-6xl text-4xl font-bold sm:mb-20 mb-10">Customer testimonials</h1>
                </div>
            </div>
            <ReviewCard />
        </div>
    );
}

export default Testimonial;
