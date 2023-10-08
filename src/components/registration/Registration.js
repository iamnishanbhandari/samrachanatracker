import React from "react";
import NavBar from "../navbar/NavBar";

const Registration = () => {
  return (
    <>
      <NavBar />
      <div class="flex justify-center mt-32 bg-#F7EEF3">
        <div class=" flex flex-col justify-center w-96 h-80 rounded-xl">
          <div>
            <h1 class="font-bold text-2xl pl-20 ">Add User</h1>
          </div>
          <div>
            <input
              type="text"
              class="border border-gray-300 px-2 py-4 m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Tag no "
            ></input>
          </div>

          <div>
            <input
              type="text"
              class="border border-gray-300 px-2 py-4 m-2 w-80 rounded-md focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Enter Tag no "
            ></input>
          </div>

          <div class="flex flex-col space-y-4 my-2">
            <h2>Select User Type</h2>
            <label class="flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-blue-600"
              ></input>{" "}
              <span class="ml-2">Seed Producing Agency</span>
            </label>
            <label class="flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
              <span class="ml-2">Seed Grower</span>
            </label>
            <label class="flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
              <span class="ml-2">Seed Processor</span>
            </label>

            <label class="flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
              <span class="ml-2">Lab</span>
            </label>

            <label class="flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
              <span class="ml-2">Seed Certification Authority</span>
            </label>

            <label class="flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
              <span class="ml-2">Distributor</span>
            </label>
          </div>

          <div>
            <button class="bg-gray-800 text-white m-2 my-6 py-2 px-2 rounded-xl w-80">
              Create User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
