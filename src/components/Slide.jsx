import Slider from "infinite-react-carousel/lib/carousel/slider";
import React from "react";

const Slide = ({  children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="flex justify-center   place-items-center  my-10 px-0 py-6 ">
      <div className=" w-[1400px] "  >
        <Slider
          
          slidesToShow={slidesToShow}
          arrowsScroll={arrowsScroll}
          
        >
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
