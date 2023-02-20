import Link from "next/link";
import React from "react";
import LowerSection from "../src/Components/ViewCard/LowerSection";
import TopSection from "../src/Components/ViewCard/TopSection";

const index = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Link href="/viewcard">
        <button>Go to View Card</button>
      </Link>
    </div>
  );
};

export default index;
