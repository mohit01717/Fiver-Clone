import React, { useState } from "react";
import Featured from "../../components/Featured";
import Trusted from "../../components/Trusted";
import Card from "../../components/Card";
import { cards } from "../../../data";
import Checkbox from "remixicon-react/CheckboxCircleLineIcon";
import Star from "remixicon-react/StarSFillIcon";
import Slide from "../../components/Slide";
import Cards1 from "../../components/Cards1";
import { cards1 } from "../../../data1";
import Cards2 from "../../components/Cards2";
const Home = () => {
  return (
    <div>
      <Featured />
      <Trusted />

      <h1 className=" mt-10 text-4xl font-semibold mx-52 text-gray-400 ">
        Popular Services
      </h1>

      <Slide slidesToShow={4} arrowsScroll={3}>
        {cards.map((e, id) => {
          return (
            <Card key={id} title={e.title} desc={e.description} img={e.image} />
          );
        })}
      </Slide>

      {/* Features 1 */}

      <div className="flex justify-center place-items-center bg-slate-100  p-20 gap-10">
        <div className="flex flex-col justify-between">
          <h3 className="text-4xl capitalize font-bold text-gray-700">
            The best part? Everything.
          </h3>

          <div className="flex place-items-center gap-1 my-3">
            <Checkbox color="grey" size={30} />
            <h2 className=" text-lg font-bold text-gray-700">
              Stick to your budget
            </h2>
          </div>
          <p className=" w-[70%] text-gray-500 font-medium text-lg">
            Find the right service for every price point. No hourly rates, just
            project-based pricing.
          </p>
          <div className="flex place-items-center gap-1 my-3">
            <Checkbox color="grey" size={30} />
            <h2 className=" text-lg font-bold text-gray-700">
              Get quality work done quickly
            </h2>
          </div>
          <p className="  w-[70%] text-gray-500 font-medium text-lg">
            Hand your project over to a talented freelancer in minutes, get
            long-lasting results.
          </p>
          <div className="flex place-items-center gap-1 my-3">
            <Checkbox color="grey" size={30} />
            <h2 className=" text-lg font-bold text-gray-700">
              Pay when you're happy
            </h2>
          </div>
          <p className=" w-[70%] text-gray-500 font-medium text-lg">
            Upfront quotes mean no surprises. Payments only get released when
            you approve.
          </p>
          <div className="flex place-items-center gap-1 my-3">
            <Checkbox color="grey" size={30} />
            <h2 className=" text-lg font-bold text-gray-700">
              Count on 24/7 support
            </h2>
          </div>
          <p className="  w-[70%] text-gray-500 font-medium text-lg">
            Our round-the-clock support team is available to help anytime,
            anywhere.
          </p>
        </div>

        <div className="right">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
            alt=""
          />
        </div>
      </div>

      {/* You need to Get it */}

      <div className=" flex flex-col justify-center place-items-center h-[70vh]">
        <h1 className=" text-4xl text-gray-600 font-bold ">
          You need To Get it
        </h1>
        <div className=" grid grid-cols-5 gap-0 w-[70%]">
          {cards1.map((e) => {
            return <Cards1 title={e.title} key={e.id} image={e.image} />;
          })}
        </div>
      </div>

      {/* Features 2*/}

      <div className="flex justify-center place-items-center  bg-purple-800 p-28 gap-10 rounded-md">
        <div className="flex flex-col justify-between ">
          <div className=" flex place-items-center">
            <span className="text-4xl font-bold text-white">fiverr</span>
            <span className=" text-green-400 text-5xl">.</span>

            <h3 className="text-xl capitalize font-bold text-gray-400 ">
              Business Solutions
            </h3>
          </div>

          <h3 className="text-4xl capitalize font-bold text-white w-[50%] my-10">
            Advanced solutions and professional talent for businesses
          </h3>

          <div className="flex place-items-center gap-1 my-3">
            <Checkbox color="white" size={30} />
            <div>
              <h2 className=" text-lg font-bold text-white">Fiverr Pro</h2>
              <h2 className=" text-lg font-bold text-white">
                Access top freelancers and professional business tools for any
                project
              </h2>
            </div>
          </div>

          <div className="flex place-items-center gap-1 my-3">
            <Checkbox color="white" size={30} />
            <div>
              <h2 className=" text-lg font-bold text-white">Fiverr Pro</h2>
              <h2 className=" text-lg font-bold text-white">
                Build your own branded marketplace of certified experts
              </h2>
            </div>
          </div>

          <div className="flex place-items-center gap-1 my-3">
            <Checkbox color="white" size={30} />
            <div>
              <h2 className=" text-lg font-bold text-white">Fiverr Pro</h2>
              <h2 className=" text-lg font-bold text-white w-[73%]">
                Manage your freelance workforce and onboard additional talent
                with an end-to-end SaaS solution
              </h2>
            </div>
          </div>

          <div>
            <button className=" px-6 py-2 border rounded-md bg-white text-gray-500 font-bold m-4">
              Learn More
            </button>
          </div>
        </div>

        <div className="right">
          <img
            className="w-[70%]"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
            alt=""
          />
        </div>
      </div>

      {/* Products */}

<div className=" bg-slate-100">
      <Slide  slidesToShow={4} arrowsScroll={3}>

      <Cards2/>
      <Cards2/>
      <Cards2/>
      <Cards2/>
      <Cards2/>
      <Cards2/>
      <Cards2/>
      <Cards2/>
      <Cards2/>
      <Cards2/>
      </Slide>
</div>
    </div>
  );
};

export default Home;
