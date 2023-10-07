import React from "react";
import NavBar from "../navbar/NavBar";

const Processing = () => {
  return (
    <>
      <NavBar />
      <div class="flex justify-center mt-32 bg-#F7EEF3">
        <div class="border border-gray-300 flex flex-col justify-center w-96 h-80 rounded-xl">
          <div>
            <input
              type="text"
              class="border border-gray-300 px-2 py-4 m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Batch Id "
            ></input>
          </div>

          <div>
            <input
              type="number"
              class="border border-gray-300 px-2 py-4  m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Total Quantity"
            ></input>
          </div>

          <div>
            <input
              type="date"
              class="border border-gray-300 px-2 py-4 m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Processing Date"
            ></input>
          </div>

          <div>
            <button class="bg-gray-800 text-white w-52 m-2 py-2 rounded-xl w-80">
              Add Batch
            </button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <button class="border border-gray-600 h-14 rounded-md flex w-32 mx-20 my-24">
            {" "}
            Show Transcactions
          </button>
        </div>
      </div>
    </>
  );
};

export default Processing;
