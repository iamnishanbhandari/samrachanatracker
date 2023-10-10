import React from "react";

const Distributor = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-3/4 mx-auto items-start bg-gray-50 py-10">
        <div className="border border-gray-300 bg-white flex flex-col justify-center shadow-lg w-full mx-auto p-5 rounded-xl">
          <div>
            <input
              type="text"
              className="border border-gray-300 px-2 py-4  w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Batch ID "
            ></input>
          </div>

          <div>
            <input
              type="number"
              className="border border-gray-300 px-2 py-4  mt-2  w-full rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Total Quantity"
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
            <button className="bg-gray-400 text-white mt-20 py-5 px-2 rounded-xl w-full">
              Add Batch
            </button>
          </div>
        </div>

        <div>
          <button className=" outline-none mt-10 rounded-md flex w-full px-10 py-4 bg-blue-900 text-white font-semi-bold ">
            {" "}
            Show Transcactions
          </button>
        </div>
      </div>
    </>
  );
};

export default Distributor;
