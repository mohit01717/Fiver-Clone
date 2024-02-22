import React from "react";
import "./section1.css";
const Section1 = () => {
  return (
    <div className="section1_container">
      <div>
        <img
          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,dpr_1.0/v1/attachments/generic_asset/asset/4637ac0b5e7bc7f247cd24c0ca9e36a3-1690384616487/jenny-2x.jpg"
          alt=""
        />
      </div>
      <div className="section1_text_container">
        <h1>Find The right freelance service, right away</h1>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for any Service..."
          />
          <span id="search">Search</span>
        </div>
        <div id="section1_keyword_container">
          <h5>Popular: </h5>
          <span>Website Design</span>
          <span>Word Press</span>
          <span>Logo Design</span>
          <span>AI Services</span>
        </div>
      </div>
    </div>
  );
};

export default Section1;
