import React from "react";
import Featured from "../../components/Featured";
import Trusted from "../../components/Trusted";
import Slide from "../../components/Slide";
import Card from "../../components/Card";
import { cards } from "../../../data";

const Home = () => {
  return (
    <div>
      <Featured />
      <Trusted />

      <div className="flex justify-center   place-items-center h-[50vh]  my-10 - ">
        <div className=" w-[100%]">
          <h1 className=" my-10 text-4xl font-semibold mx-10 text-gray-400">
            Popular Services
          </h1>
          <Slide rows={1} slidesToShow={5} arrowsScroll={5}>
            {cards.map((e, id) => {
              return (
                <Card
                  key={id}
                  title={e.title}
                  desc={e.description}
                  img={e.image}
                />
              );
            })}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Home;
