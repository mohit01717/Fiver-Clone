import React from "react";

const Card = ({ desc, title, img }) => {
  return (
 
      <div className=" flex flex-col relative place-items-center">
        <div className="w-[230px]">
          <img
            className=" rounded-md  z-0"
            style={{ height: "100%", width: "100%" }}
            src={img}
            alt=""
          />
        </div>
        <div className="text absolute top-2 text-white">
          <p className=" text-lg font-semibold">{desc}</p>
          <h1 className=" text-xl font-bold mx-1">{title}</h1>
        </div>
      </div>
    
  );
};

export default Card;
