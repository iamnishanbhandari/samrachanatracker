import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  let [open, setOpen] = useState(false);
  const AllLinks = [
    { id: "1", name: "Dashboard", path: "/" },
    { id: "2", name: "Seed Producing Agency", path: "/SeedProducingAgency" },
    { id: "11", name: "Seed Growth", path: "/SeedGrowth" },
    {
      id: "3",
      name: " Seed Cetification Authority",
      path: "/SeedCetificationAuthority",
    },
    { id: "4", name: "Lab", path: "/Lab" },
    { id: "6", name: "Processing", path: "/Processing" },
    { id: "7", name: "Distributor", path: "/Distributor" },
    { id: "8", name: "Consumer", path: "/Consumer" },
    { id: "9", name: "Signin", path: "/Signin" },
    { id: "10", name: "Register", path: "/Registration" },
  ];
  return (
    <>
      {/* hero section */}
      <div
        data-navbar
        className={` 
       z-[1000] w-full   navbar    text-black  bg-white flex justify-between items-center   sticky top-0 `}
      >
        <nav className="flex relative  w-full  py-7  justify-center px-8  items-center  backdrop-blur-lg  md:bg-opacity-20 shadow text-center">
          <div className="flex justify-between  items-center w-full ">
            <Link onClick={() => open && setOpen(false)} to={"/"}>
              <h1 className="lg:px-20  text-2xl w-full  font-semibold">
                Seed Tracker
              </h1>
            </Link>
            <ul className="hidden lg:flex justify-center items-center font-nav text-md text-black space-x-4 ">
              {AllLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    className=" border-b-2  border-transparent hover:border-dorange  "
                    style={({ isActive }) => {
                      return {
                        padding: "6px",
                        borderBottom: isActive ? "2px solid black" : "",
                      };
                    }}
                    to={link.path}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`flex fixed inset-0  w-full overflow-y-hidden bg-white h-screen lg:bg-transparent transition
        ${open ? "" : "-translate-y-[150%]"}
       ease-in-out duration-700  flex-col py-5 md:py-0 -z-30 w-full px-5  mx-auto justify-center `}
          >
            {AllLinks.map((link, state) => (
              <NavLink
                key={state}
                className={""}
                style={({ isActive }) => {
                  return {
                    textDecorationLine: isActive ? "underline " : "",
                    // padding: "6px",
                  };
                }}
                to={link.path}
                onClick={() => setOpen(false)}
              >
                <div className="flex  justify-around items-center w-full py-2  lg:hidden">
                  <h1 className="text-lg text-center">{link.name}</h1>{" "}
                </div>
              </NavLink>
            ))}
          </div>
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {!open ? (
              <svg
                className="w-6 h-6 cursor-pointer select-none fill-white stroke-gray-400"
                fill="white"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <div>
                <h1 className=" text-xl text-dorange text-center z-[5000] cursor-pointer select-none text-black  font-semibold">
                  X
                </h1>
              </div>
            )}
          </button>
        </nav>
      </div>
      {/* <nav className="">
        <div className=" text-black py-5 bg-white flex justify-between items-center border-b-2 sticky top-0 w-full z-50">
          <Link to="/">
            <div className="px-20  text-2xl   font-semibold">
              {" "}
              Seed Tracking
            </div>
          </Link>
          <div className=" ">
            <Stack direction={"row"} spacing={1} className="mr-5">
              <Box>
                <Link to={"/SeedProducingAgency"}>
                  <Button
                    sx={{
                      // boxShadow:
                      //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                      height: "60px",
                      width: "100%",
                      mt: "15px",
                    }}
                  >
                    Seed Producing Agency
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link to={"/SeedGrowth"}>
                  <Button
                    sx={{
                      // border: "1px solid gray",

                      // boxShadow:
                      //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                      height: "60px",
                      width: "100%",
                      mt: "15px",
                    }}
                  >
                    Seed Growth
                  </Button>{" "}
                </Link>
              </Box>
              <Box>
                <Link to={"/SeedCetificationAuthority"}>
                  <Button
                    sx={{
                      // border: "1px solid gray",

                      // boxShadow:
                      //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                      height: "60px",
                      width: "100%",
                      mt: "15px",
                    }}
                  >
                    Seed Cetification Authority
                  </Button>{" "}
                </Link>
              </Box>
              <Box>
                <Link to={"/Lab"}>
                  <Button
                    sx={{
                      // border: "1px solid gray",
                      // boxShadow:
                      //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",

                      height: "60px",
                      width: "100%",
                      mt: "15px",
                    }}
                  >
                    Lab
                  </Button>{" "}
                </Link>
              </Box>
              <Box>
                <Link to={"/Processing"}>
                  <Button
                    sx={{
                      // border: "1px solid gray",
                      // boxShadow:
                      //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",

                      height: "60px",
                      width: "100%",
                      mt: "15px",
                    }}
                  >
                    Processing
                  </Button>{" "}
                </Link>
              </Box>
              <Box>
                <Link to={"/Distributor"}>
                  <Button
                    sx={{
                      // border: "1px solid gray",

                      // boxShadow:
                      //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                      height: "60px",
                      width: "100%",
                      mt: "15px",
                    }}
                  >
                    Distributor
                  </Button>{" "}
                </Link>
              </Box>
              <Box>
                <Link to={"/Consumer"}>
                  <Button
                    sx={{
                      // border: "1px solid gray",

                      // boxShadow:
                      //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                      height: "60px",
                      width: "100%",
                      mt: "15px",
                    }}
                  >
                    Consumer
                  </Button>{" "}
                </Link>
              </Box>
              <Box>
                <Link to={"/Signin"}>
                  <Button
                    sx={{
                      // border: "1px solid gray",

                      // boxShadow:
                      //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                      height: "60px",
                      width: "100%",
                      mt: "15px",
                    }}
                  >
                    Signin
                  </Button>{" "}
                </Link>
              </Box>
              <Box>
                <Link to={"/Registration"}>
                  <Button
                    sx={{
                      // border: "1px solid gray",

                      // boxShadow:
                      //   "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px ",
                      height: "60px",
                      width: "100%",
                      mt: "15px",
                    }}
                  >
                    Register
                  </Button>{" "}
                </Link>
              </Box>
            </Stack>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default NavBar;
