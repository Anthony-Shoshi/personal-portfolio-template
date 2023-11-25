import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {
        id: 1, name: "Dianne Russell", company: "Starbucks", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.", photo: "/src/assets/avatar.png"
    },
    {
        id: 2, name: "Kristin Watson", company: "Louis Vuitton", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.", photo: "/src/assets/avatar.png"
    },
    {
        id: 3, name: "Kathryn Murphy", company: "McDonald's", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.", photo: "/src/assets/avatar.png"
    },
    {
        id: 4, name: "Dianne Russell", company: "Starbucks", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.", photo: "/src/assets/avatar.png"
    },
    {
        id: 5, name: "Kristin Watson", company: "Louis Vuitton", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.", photo: "/src/assets/avatar.png"
    },
    {
        id: 6, name: "Kathryn Murphy", company: "McDonald's", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.", photo: "/src/assets/avatar.png"
    },
];

const ReviewCard = () => {
    return (

        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                },
            }}
            className="mySwiper"
        >
            {reviews.map(review =>
                <SwiperSlide key={review.id}>
                    <div className="border border-[#006B6A] p-8 rounded cursor-pointer">
                        <img src="/src/assets/stars.png" alt="stars" className='h-4' />
                        <p className="py-6">
                            {review.comment}
                        </p>
                        <div className="flex items-center gap-4">
                            <img src={review.photo} className="h-10" alt="avatar" />
                            <div>
                                <p className="font-semibold">{review.name}</p>
                                <p className='text-sm'>{review.company}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    );
}

export default ReviewCard;