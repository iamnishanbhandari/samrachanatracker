import React from "react";
import NavBar from "../navbar/NavBar";

const Distributor = () => {
  return (
    <>
      <>
        <NavBar />
        <div class="flex justify-center mt-32 bg-#F7EEF3">
          <div class="border border-gray-300 flex flex-col justify-center w-96 h-80 rounded-xl">
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
                placeholder="Enter Store House Details"
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
              <button class="bg-gray-800 text-white m-2 py-2 px-2 rounded-xl w-80">
                Update Details
              </button>
            </div>
          </div>

          <div>
            <div>
              <button class=" outline-none h-14 rounded-md flex w-32 mx-20 my-24 p-1 bg-blue-900 text-white font-semi-bold ">
                {" "}
                Show Transcactions
              </button>
            </div>
          </div>
        </div>
      </>
      );
    </>
  );
};

export default Distributor;
