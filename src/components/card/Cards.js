import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-300 w-64 m-5">
        <img className="w-1" src={props?.thumbnailUrl} alt="card img" />
        <h5 className="mb-2 text-xl font-medium leading-tight #18181b-800 dark:#18181b-50">{props?.title}</h5>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 block mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Button
        </button>
      </div>
    </>
  );
};

export default Cards;
