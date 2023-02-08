import React from "react";
import { IoMdCall } from "react-icons/io";
import { HiEnvelope } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import Link from "next/link";

const LowerSection = () => {
  return (
    <div className="bg-[#F7F7F7] h-[calc(100vh-40vh)] py-10 flex flex-col gap-y-4">
      <div className="flex gap-x-4   w-full pl-6">
        <IoMdCall className="text-3xl text-[#B3B4BB]" />
        <div className="border-b border-gray-300 w-full pb-4">
          <p className="text-sm">+8801521320912</p>
          <p className="text-gray-500 text-sm">Mobile</p>
        </div>
      </div>

      <div className="flex gap-x-4   w-full pl-6">
        <HiEnvelope className="text-3xl text-[#B3B4BB]" />
        <div className="border-b border-gray-300 w-full pb-4">
          <p className="text-sm">habiburnobel@gmail.com</p>
          <p className="text-gray-500 text-sm">Email</p>
        </div>
      </div>

      <div className="flex gap-x-4   w-full pl-6">
        <MdWork className="text-3xl text-[#B3B4BB]" />
        <div className="border-b border-gray-300 w-full pb-4">
          <p className="text-sm">Bit Software Solutions</p>
          <p className="text-gray-500 text-sm">Full Stack Web Developer</p>
        </div>
      </div>

      <div className="pl-[68px]">
        <p className="mb-6">Social Media</p>
        <div className="flex gap-x-4 items-center">
          {/* facebook */}
          <Link
            href="https://www.facebook.com/habibur.rahaman.nobel"
            target="_blank"
          >
            <div className="bg-[#0034B7] w-8 h-8 rounded-full flex justify-center items-center">
              <ImFacebook className="text-white" />
            </div>
          </Link>
          {/* whatsapp */}
          <Link href="https://wa.me/+8801521320912" target="_blank">
            <div className="bg-[#1BD741] w-8 h-8 rounded-full flex justify-center items-center">
              <BsWhatsapp className="text-white" />
            </div>
          </Link>

          {/* linkedin */}
          <Link
            href="https://www.linkedin.com/in/habibur-rahaman-nobel/"
            target="_blank"
          >
            <div className="bg-[#0077B5] w-8 h-8 rounded-full flex justify-center items-center">
              <TfiLinkedin className="text-white" />
            </div>
          </Link>

          {/* github */}
          <Link href="https://github.com/nobel7761" target="_blank">
            <div className="bg-[#000000] w-8 h-8 rounded-full flex justify-center items-center">
              <BsGithub className="text-white" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LowerSection;
