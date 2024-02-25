import Slider from "infinite-react-carousel/lib/carousel/slider";
import React from "react";

const Slide = ({ rows, children, slidesToShow, arrowsScroll }) => {
  return (
    <>
      <Slider
        rows={rows}
        slidesToShow={slidesToShow}
        arrowsScroll={arrowsScroll}
        
      >
        {children}
      </Slider>
    </>
  );
};

export default Slide;
