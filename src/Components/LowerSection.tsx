import React from "react";
import { IoMdCall } from "react-icons/io";
import { HiEnvelope } from "react-icons/hi2";
import { MdWork } from "react-icons/md";

const LowerSection = () => {
  return (
    <div className="bg-[#F7F7F7] h-[calc(100vh-50vh)] py-10 flex flex-col gap-y-4">
      <div className="flex gap-x-4   w-full pl-6">
        <IoMdCall className="text-3xl text-[#B3B4BB]" />
        <div className="border-b border-gray-300 w-full pb-4">
          <p className="text-sm">+8801521320912</p>
          <p className="text-gray-500 text-sm">Mobile</p>
        </div>
      </div>

      <div className="flex gap-x-4   w-full pl-6">
        <HiEnvelope className="text-3xl text-[#B3B4BB]" />
        <div className="border-b border-[#B3B4BB] w-full pb-4">
          <p className="text-sm">habiburnobel@gmail.com</p>
          <p className="text-gray-500 text-sm">Email</p>
        </div>
      </div>

      <div className="flex gap-x-4   w-full pl-6">
        <MdWork className="text-3xl text-[#B3B4BB]" />
        <div className="border-b border-[#B3B4BB] w-full pb-4">
          <p className="text-sm">Bit Software Solutions</p>
          <p className="text-gray-500 text-sm">Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default LowerSection;
