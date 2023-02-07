import React from "react";
import LowerSection from "../src/Components/LowerSection";
import TopSection from "../src/Components/TopSection";

const index = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <TopSection />
      <LowerSection />
    </div>
  );
};

export default index;
