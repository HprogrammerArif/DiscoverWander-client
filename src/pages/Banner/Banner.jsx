
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

 import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Banner = () => {
  return (
    <>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-2xl"
      >
        <SwiperSlide ><img  src="https://i.ibb.co/R4R5CHV/premium-photo-1677002240252-af3f88114efc-q-80-w-1425-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/SJ4WXLZ/photo-1641967044212-393d115a4465-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/LzgVrXG/photo-1673627114915-27e0f156e225-q-80-w-1374-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/N7nMqNd/photo-1652867769695-f08d770ce88e-q-80-w-1530-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/mF71tSJ/photo-1563693267403-111c5d856e49-q-80-w-1374-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/6Nf0mtV/photo-1491555103944-7c647fd857e6-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/ZSYQvKc/photo-1552039431-11d2a516d0d4-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
    
  );
};

export default Banner;
