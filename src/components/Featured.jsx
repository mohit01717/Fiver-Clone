import React from "react";

const Featured = () => {

  return (
    <div
      className=" flex justify-around place-items-center h-[70vh] w-[100%]  text-black "
      style={{ backgroundColor: 'green' }}
    >
      
        <div className=" flex    flex-col  place-items-center mx-8 ">
          <h1 className="text-6xl  mb-10 text-white  font-bold px-4 text-center ">
            Find the Perfect freelance services for your business
          </h1>
          <div className=" flex place-items-center mb-5">
            <input
              className=" h-12  p-3 w-[30vw] outline-none "
              type="text"
              placeholder="Search for any service"
              id=""
            />

            <button className=" bg-green-300 py-3 px-5 hover:bg-green-500 ">Search</button>
          </div>
          <div className=" flex gap-3  text-white">
            <span className=" font-serif text-xl">Popular:</span>
            <button className=" border px-2 py-1 rounded-full font-bold hover:bg-slate-100 hover:text-black">Website Design</button>
            <button className=" border px-2 py-1 rounded-full font-bold hover:bg-slate-100 hover:text-black">WordPress</button>
            <button className=" border px-2 py-1 rounded-full font-bold hover:bg-slate-100 hover:text-black">Logo Design</button>
            <button className=" border px-2 py-1 rounded-full font-bold hover:bg-slate-100 hover:text-black">AI service</button>
          </div>
        </div>
        <div className="right w-[100vw] mx-20  ">
          <img
            className="h-[100%]  w-[100%]"
            src="src\assets\one.png"
            alt="not"
          />
        </div>
      </div>
  
  );
};

export default Featured;
