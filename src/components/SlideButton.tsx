import React from "react";
import { useSwiper } from "swiper/react";

interface SlideButtonProps {
  children: JSX.Element;
  prev?: boolean;
}

export function SlideButton({ children, prev }: SlideButtonProps) {
  const swiper = useSwiper();
  function handleSlide() {
    prev ? swiper.slidePrev() : swiper.slideNext();
  }
  return (
    <button
      className={
        prev
          ? "absolute left-4 bg-white rounded-full w-12 h-12 flex items-center justify-center"
          : "absolute right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center"
      }
      onClick={handleSlide}
    >
      {children}
    </button>
  );
}
