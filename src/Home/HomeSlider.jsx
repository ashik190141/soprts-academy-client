import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img1 from '../assets/cricket.jpeg';
import img2 from '../assets/football.jpg';
import img3 from '../assets/badminton.jpg';
import img4 from '../assets/chess.jpg';
import img5 from '../assets/volleyball.jpg';
import img6 from '../assets/handball.jpg';

const HomeSlider = () => {
    return (
        <div className="mt-[80px] max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-8">Facilities</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h2 className="md:text-4xl uppercase text-center -mt-10 text-white">Cricket</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h2 className="md:text-4xl uppercase text-center -mt-10 text-black">Football</h2>    
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />    
                    <h2 className="md:text-4xl uppercase text-center -mt-10 text-white">Badminton</h2>    
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h2 className="md:text-4xl uppercase text-center -mt-10 text-white">Chess</h2>  
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h2 className="md:text-4xl uppercase text-center -mt-10 text-orange-500">Volleyball</h2>    
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt="" />
                    <h2 className="md:text-4xl uppercase text-center -mt-20 text-black">Handball</h2>    
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomeSlider;