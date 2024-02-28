import React from "react";
import GigCard from "../../components/GigCard";
import Home_Icon from "remixicon-react/Home5LineIcon";
import Play_Icon from "remixicon-react/PlayCircleFillIcon";
import Down_Arrow_Icon from "remixicon-react/ArrowDownSLineIcon";
import Switch from "react-switch";
const Gig = () => {
  return (
    <div className=" flex flex-col gap-4 mx-52">
      <div className="menu flex gap-4 place-items-center">
        <Home_Icon size={15} />
        <div className=" flex gap-1 text-md">
          <span>/</span>
          <h4>Graphics Design</h4>
        </div>
      </div>

      <div className=" flex flex-col gap-2">
        <h1 className=" text-3xl font-bold text-gray-800">AI Artists</h1>
        <div className=" flex gap-3 ">
          <p className=" text-md text-gray-600 font-serif">
            Explore the boundaries of art and technology with Fiverr's AI
            artists
          </p>
          <span className=" text-gray-400">|</span>
          <div className=" flex gap-1 place-items-center">
            <Play_Icon size={15} className=" cursor-pointer" />
            <h4 className=" text-gray-800 font-serif">How Fiverr Works</h4>
          </div>
        </div>
      </div>
      <div className="menu flex justify-around">
        <div className="flex gap-5 ">
          <div className=" border p-3 text-gray-800  font-bold rounded-md flex gap-1 hover:border-black cursor-pointer">
            <h4>Service Options</h4>

            <Down_Arrow_Icon />
          </div>

          <div className=" border p-3 text-gray-800  font-bold rounded-md flex gap-1 cursor-pointer hover:border-black">
            <h4>Seller details</h4>

            <Down_Arrow_Icon />
          </div>

          <div className=" border p-3 text-gray-800  font-bold rounded-md flex gap-1 cursor-pointer hover:border-black">
            <h4> Budget</h4>

            <Down_Arrow_Icon />
          </div>

          <div className=" border p-3 text-gray-800  font-bold rounded-md flex gap-1 cursor-pointer hover:border-black">
            <h4> Delivery Time</h4>

            <Down_Arrow_Icon />
          </div>
        </div>
        <div>
          <div className=" flex gap-2 place-items-center">
            <Switch
              checked={false}
              height={23}
              width={46}
              boxShadow="0px 5px 15px;"
            />
            <h4 className=" text-gray-500 font-bold cursor-pointer">Pro Services</h4>
          </div>
        </div>
      </div>

      <div className=" flex flex-wrap">
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
        <GigCard />
      </div>
    </div>
  );
};

export default Gig;
