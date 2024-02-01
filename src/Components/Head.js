import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1  ">
        <img
          className="w-12 h-12 "
          alt="logo"
          src="https://i.pinimg.com/originals/b6/e7/03/b6e703d1471fed40d143ab27340844d3.png"
        />
      </div>
      <div className="flex col-span-10">
        <input
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500 w-1/2"
          type="text"
        />
        <button className="mx-2 border border-gray-300 rounded-md px-3 focus:outline-none focus:border-blue-500">
          Search
        </button>
      </div>

      <div className="flex col-span-1 justify-end">
        <img
          className="w-8 h-8"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
