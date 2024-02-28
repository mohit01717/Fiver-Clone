import React from "react";
import Star from "remixicon-react/StarFillIcon";
const GigCard = () => {
  return (
    <div className="w-[300px] h-[340px]  flex flex-col justify-center m-2  ">
      <img
        src="https://fiverr-res.cloudinary.com/videos/so_0.417227,t_main1,q_auto,f_auto/wueaqwnevakmwnjrt6sf/create-awesome-resposive-website.png"
        alt="" className="rounded-md cursor-pointer"
        
      />
      <div className=" flex justify-start place-items-center gap-2 my-1 hover:underline">
        <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/58960b09956dc710d2d5a33573261936-1554984111113/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" alt="" className=" rounded-full h-6" />
        <h3>Mohit Gagneja</h3>
      </div>
      <p className=" hover:underline cursor-pointer">I will design responsive website in 10 hours</p>
      <div className=" flex gap-1 place-items-center my-2">
        <Star size={15} />
        <span>5.0</span>
        <span>(1k+)</span>
      </div>
      <div className=" flex font-bold gap-1 mb-2 pb-5 cursor-pointer">
        <h4>From</h4>
        <h4>7,832</h4>
      </div>
    </div>
  );
};

export default GigCard;
