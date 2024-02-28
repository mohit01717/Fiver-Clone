import React, { useState } from "react";

const Cards1 = ({ title, image }) => {
  const [line, setline] = useState(false);
  return (
    <div
      className="flex flex-col  justify-center  place-items-center h-[200px] w-[200px] gap-2 cursor-pointer "
      onMouseEnter={() => setline(true)}
      onMouseLeave={() => setline(false)}
    >
      <img className="w-12" src={image} alt="" />
      <div
        className={`border-t-2 border-gray-500 
      
     hover ${line ? "border-green-500" : "border-gray-500"}
     hover ${line ? "transition-transform " : "none"}  
     hover ${line ? " px-11 " : "px-4"}
     hover ${line ? "scale-x-125 " : "none"} 
    
     }`}
      ></div>
      <h2>{title}</h2>
    </div>
  );
};

export default Cards1;
