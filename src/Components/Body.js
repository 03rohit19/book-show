import React from "react";

import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className=" h-[1430px] ">
      <Outlet />
    </div>
  );
};

export default Body;
