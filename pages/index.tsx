import Link from "next/link";
import React from "react";
import LowerSection from "../src/Components/ViewCard/LowerSection";
import TopSection from "../src/Components/ViewCard/TopSection";

const index = () => {
  return (
    <div className="flex flex-col gap-y-2 h-screen justify-center items-center">
      <h1>Welcome To Super Portfolio</h1>
      <Link href="/viewcard">
        <button className="px-10 py-2 rounded bg-[#3460FB] bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 text-white">
          View Card
        </button>
      </Link>

      <Link href="/profilecard">
        <button className="px-10 py-2 rounded bg-[#3460FB] bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 text-white">
          Profile Card
        </button>
      </Link>
    </div>
  );
};

export default index;
