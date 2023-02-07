import Image from "next/image";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";

const TopSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/MD HABIBUR RAHAMAN.png"
          alt="DP"
          width={150}
          height={150}
          className="rounded-full mt-10"
        />
      </div>

      <div className="text-center my-5 flex flex-col gap-y-2">
        <p className="text-2xl">Md. Habibur Rahaman Nobel</p>
        <p className="text-lg text-gray-500">Full Stack Web Developer</p>
      </div>

      <div className="flex justify-center gap-x-32">
        <div className="flex flex-col gap-y-1 justify-center items-center">
          <IoMdCall className="text-xl" />
          <p className="text-sm">CALL</p>
        </div>
        <div className="flex flex-col gap-y-1 justify-center items-center">
          <IoSendSharp className="text-xl" />
          <p className="text-sm">EMAIL</p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
