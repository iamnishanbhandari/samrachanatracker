import React from "react";
import NavBar from "../navbar/NavBar";

const SeedProducingAgency = () => {
  return (
    <>
      <NavBar />
      <div class="flex justify-center mt-32 bg-#F7EEF3">
        <div class="border border-gray-300  flex flex-col justify-center w-96  rounded-xl">
          <div>
            <input
              type="text"
              class="border border-gray-300 px-2 py-4 m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Tag no "
            ></input>
          </div>

          <div>
            <input
              type="number"
              class="border border-gray-300 px-2 py-4  m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Certification info"
            ></input>
          </div>

          <div>
            <input
              type="date"
              class="border border-gray-300 px-2 py-4 m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Issuing Date"
            ></input>
          </div>

          <div>
            <input
              type="number"
              class="border border-gray-300 px-2 py-4  m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Variety"
            ></input>
          </div>

          <div>
            <input
              type="number"
              class="border border-gray-300 px-2 py-4  m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Owner"
            ></input>
          </div>

          <div>
            <input
              type="number"
              class="border border-gray-300 px-2 py-4  m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Plot No"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeedProducingAgency;
