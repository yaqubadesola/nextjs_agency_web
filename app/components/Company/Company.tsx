import React from "react";
import Icon1 from "@/public/images/icon1.png";
import Icon2 from "@/public/images/icon2.png";
import SupportTeamImage from "@/public/images/supportteam.jpg";
import CustomerImage from "@/public/images/customer.png";
import Image from "next/image";
const Company = () => {
  return (
    <div className="pt-[6rem] pb-[3rem]">
      <h1 className="mb-[1.5rem] text-[22px] text-center md:text-[30px] font-bold text-[#02073e]">
        Company who also worked with us
      </h1>
      <p className="text-gray-950 w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-[17px] text-center opacity-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus
        voluptates fugit cupiditate, assumenda obcaecati, quae enim nesciunt
        cumque ducimus recusandae! In, aut hic. Ea labore et deleniti suscipit?
        Quod?
      </p>
      <p className="mt-[1.7rem] text-center font-[500] text-[15px] text-blue-600 cursor-pointer">
        Explore Details.
      </p>
      <div className="mt-[2rem] text-center w-[80%] mx-auto ">
        <Image src={CustomerImage} alt="Company Image" />
      </div>
    </div>
  );
};

export default Company;
