import React from "react";
import Icon1 from "@/public/images/icon1.png";
import Icon2 from "@/public/images/icon2.png";
import SupportTeamImage from "@/public/images/supportteam.jpg";
import Image from "next/image";
const SupportTeam = () => {
  return (
    <div className="pt-[7rem] pb-[3rem]">
      <div className="w-[80%] mx-auto items-center grid gird-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <h1 className="text-[27px] md:text-[35px] lg:text-[40] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
            Do you need help? Our Team ready to help you
          </h1>
          <p className="text-gray-900 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            doloribus voluptates fugit cupiditate, assumenda obcaecati, quae
            enim nesciunt cumque ducimus recusandae! In, aut hic. Ea labore et
            deleniti suscipit? Quod?
          </p>
          <div className="flex items-center space-x-6 mt-[2rem]">
            <Image src={Icon1} alt="icon" width={60} height={60} />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem]">
                Email client support
              </h1>
              <p className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati, maiores eligendi.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6 mt-[2rem]">
            <Image src={Icon2} alt="icon2" width={60} height={60} />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem]">
                Live Ticket support
              </h1>
              <p className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati, maiores eligendi.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image src={SupportTeamImage} alt="Supoort Image" />
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;
