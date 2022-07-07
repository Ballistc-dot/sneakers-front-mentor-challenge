import { Navigation, A11y } from "swiper";

import productImage1 from "../assets/image-product-1.jpg";
import productImage2 from "../assets/image-product-2.jpg";
import productImage3 from "../assets/image-product-3.jpg";
import productImage4 from "../assets/image-product-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Next } from "./Icons/Next";
import { Previous } from "./Icons/Previous";
import { SlideButton } from "./SlideButton";

const slideImages = [
  productImage1,
  productImage2,
  productImage3,
  productImage4,
];

export function SlideSwiper() {
  return (
    <Swiper
      className="flex h-auto w-screen md:hidden m-0  justify-center"
      modules={[Navigation, A11y]}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {slideImages.map((image, index) => (
        <SwiperSlide key={image} className="flex w-[100%] items-center">
          {index != 0 && (
            <SlideButton prev>
              <Previous />
            </SlideButton>
          )}
          <img
            src={image}
            alt="product image"
            className="md:w-[7rem] w-auto h-auto"
          ></img>
          {index < slideImages.length - 1 && (
            <SlideButton>
              <Next />
            </SlideButton>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
