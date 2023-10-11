import React from "react";

const SeedProducingAgency = () => {
  return (
    <div className=" bg-gray-50">
      <div className="flex flex-col justify-center w-3/4 mx-auto items-start py-10 ">
        <div className="border border-gray-300 flex flex-col justify-center shadow-lg w-full mx-auto p-5 bg-white rounded-xl">
          <div>
            <input
              type="text"
              className="border border-gray-300 px-2 py-4  w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Tag no "
            ></input>
          </div>

          <div>
            <input
              type="text"
              className="border border-gray-300 px-2 py-4  mt-2  w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Crop"
            ></input>
          </div>

          <div>
            <input
              type="date"
              className="border border-gray-300 px-2 py-4 mt-2  w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Issuing Date"
            ></input>
          </div>
          <div>
            <input
              type="text"
              className="border border-gray-300 px-2 py-4  mt-2  w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Validity if available"
            ></input>
          </div>
          <div>
            <input
              type="text"
              className="border border-gray-300 px-2 py-4  mt-2  w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Source Quantity"
            ></input>
          </div>
          <div>
            <input
              type="text"
              className="border border-gray-300 px-2 py-4  mt-2  w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Owner"
            ></input>
          </div>
          <div>
            <input
              type="text"
              className="border border-gray-300 px-2 py-4  mt-2  w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Plot no."
            ></input>
          </div>
          <div>
            <button className="bg-gray-400 text-white mt-20 py-5 px-2 rounded-xl w-full">
              Update Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedProducingAgency;
