import React from "react";

interface Props {
  headingMini: string;
  headingPrimary: string;
}
const SectionHeading = ({ headingMini, headingPrimary }: Props) => {
  return (
    <div className="text-center p-2">
      <p className="text-[#0b6cad]">{headingMini}</p>
      <h1 className="mt-[0.5rem] text-[22px] font-bold md:text-[30px] text-[#02073e]">
        {headingPrimary}
      </h1>
    </div>
  );
};

export default SectionHeading;
