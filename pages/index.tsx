import Link from "next/link";
import React from "react";
import LowerSection from "../src/Components/ViewCard/LowerSection";
import TopSection from "../src/Components/ViewCard/TopSection";

const index = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <h1>base page</h1>
      <Link href="/viewcard">
        <button>Go to View Card</button>
      </Link>
    </div>
  );
};

export default index;
