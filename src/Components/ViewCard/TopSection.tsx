import Image from "next/image";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";
import DP from "../../../public/images/profile-photo.png";

const TopSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-24">
        <div className="w-40 h-40 flex justify-center items-center rounded-full overflow-hidden bg-red-500  ring-offset-2 ring-2 ring-blue-500">
          <Image
            src={DP}
            alt="DP"
            width={500}
            height={500}
            className="rounded-full mt-6"
          />
          {/* <img src="../public/images/MD HABIBUR RAHAMAN.png" alt="DP" /> */}
        </div>
      </div>

      <div className="text-center my-5 flex flex-col gap-y-2">
        <p className="text-2xl">Md. Habibur Rahaman Nobel</p>
        <p className="text-lg text-gray-500">Full Stack Web Developer</p>
      </div>

      <div className="flex justify-center gap-x-32">
        <a href="tel:+8801521320912">
          <div className="flex flex-col gap-y-1 justify-center items-center">
            <IoMdCall className="text-xl" />
            <p className="text-sm">CALL</p>
          </div>
        </a>
        <div className="flex flex-col gap-y-1 justify-center items-center">
          <IoSendSharp className="text-xl" />
          <p className="text-sm">EMAIL</p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
