import React from "react";
import Instagram from "remixicon-react/InstagramLineIcon";
import Linkedin from "remixicon-react/LinkedinFillIcon";
import Facebook from "remixicon-react/FacebookCircleFillIcon";
const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly  my-20 gap-2  border-t-2 py-10">
        <div className=" flex flex-col gap-4">
          <h2 className=" font-bold text-lg text-gray-600 ">Categories</h2>
          <span className="  font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Graphics Design
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer ">
            Digital Marketing
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer ">
            Writing & Animation
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer ">
            Video & Animation
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer ">
            Music & Audio
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer ">
            Fiver Logo Maker
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer ">
            Programming & Tech
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer ">
            Data
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer ">
            Business
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer ">
            Lifestyle
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer ">
            Photography
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer ">
            End-to-End Projects
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer ">
            Sitemap
          </span>
        </div>
        <div className=" flex flex-col gap-4">
          <h2 className="font-bold text-lg text-gray-600">About</h2>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Carrers
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Press & News
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Partnerships
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Privacy Policy
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Terms of Service
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Intellectual Property Claims
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Investor Relations
          </span>
        </div>

        <div className=" flex flex-col gap-4">
          <h2 className="font-bold text-lg text-gray-600">
            Support and Education
          </h2>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Help & Support
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Trust & Safety
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Selling on Fiverr
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Buying on Fiverr
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Fiverr Guides
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Fiverr Workspace
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Invoice Software
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Learn
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Online Courses
          </span>
        </div>

        <div className=" flex flex-col gap-4 ">
          <h2 className="font-bold text-lg text-gray-600">Community</h2>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Customer Success Stories
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Community Hub
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Forum
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Events
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Fiverr Guides
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Blog
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Influencers
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Affiliates
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Podcast
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Invite a Friend
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Become a Seller
          </span>
          <span className=" font-serif text-md text-gray-600 hover:underline cursor-pointer">
            Community Standards
          </span>
        </div>
      </div>
      <div className=" flex justify-around border p-5">
        <div className="logo w-[50%] flex justify-start place-items-center gap-2">
        <div className=" text-3xl font-bold text-gray-500 ">
         
            <span className="text">fiverr</span>
     
          <span className=" text-green-800">.</span>
        </div>
          <h4 className=" text-gray-400">&copy;Fiverr International Ltd. 2024</h4>
        </div>

        <div className="flex justify-around place-items-center w-[10%]">
          <Instagram color="grey" className="cursor-pointer" />

          <Linkedin color="grey" className=" cursor-pointer" />
          <Facebook color="grey" className=" cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Footer;
