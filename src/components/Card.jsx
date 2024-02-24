import React from "react";

const Card = () => {
  return (
    <div className="flex justify-center place-items-center">
    
      <div className=" flex flex-col relative place-items-center">
        <div className="w-[200px]" >
          <img className=" rounded-md" style={{height:"100%", width:"100%"}} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png" alt="" />
        </div>
        <div className="text absolute top-2 text-white">
          <p className=" text-lg font-semibold">Unlock growth online</p>
          <h1 className=" text-xl font-bold mx-1">SEO</h1>
        </div>
        </div>

      
    </div>
  );
};

export default Card;
