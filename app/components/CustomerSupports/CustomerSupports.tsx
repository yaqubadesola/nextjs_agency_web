import Image from "next/image";
import React from "react";
import SupportImage from "@/public/images/support.jpg";
import { CheckIcon } from "@heroicons/react/16/solid";
const CustomerSupports = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="order-2 lg:order-1"
        >
          <Image src={SupportImage} alt="support" />
        </div>
        <div className="order-1 lg:order-2">
          <h1
            data-aos="fade-left"
            dat-aos-delay="200"
            data-aos-anchor-placement="top-center"
            className="text-[20px] md:text-[25px] lg:text-[28px] text-[#02073e] font-bold leading-[2rem] md:leading-[3rem]"
          >
            Customer support is our main priority with their hundred percent
            satisfaction.
          </h1>
          <p
            data-aos="fade-right"
            dat-aos-delay="400"
            data-aos-anchor-placement="top-center"
            className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, non,
            qui dolore, minus ducimus illo ad laborum harum aut veritatis illum
            nesciunt autem. Ducimus aspernatur nisi iusto alias aliquid
            obcaecati.
          </p>
          <div
            data-aos="fade-up"
            dat-aos-delay="600"
            data-aos-anchor-placement="top-center"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17] text-[#02073e] font-[500]">
              Medical Vision
            </p>
          </div>
          <div
            data-aos="fade-up"
            dat-aos-delay="800"
            data-aos-anchor-placement="top-center"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17] text-[#02073e] font-[500]">
              Life Insurance
            </p>
          </div>
          <div
            data-aos="fade-up"
            dat-aos-delay="1000"
            data-aos-anchor-placement="top-center"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17] text-[#02073e] font-[500]">
              400(K) Savings
            </p>
          </div>
          <div
            data-aos="fade-up"
            dat-aos-delay="1200"
            data-aos-anchor-placement="top-center"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-red-600" />
            <p className="text-[17] text-[#02073e] font-[500]">HSAs and FSAs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupports;
