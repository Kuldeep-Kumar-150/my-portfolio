import React, { useState } from "react";
import klogo from "../img/svg/k-logo.svg";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="bg-[#292F36] w-full">
        {/*-----large-screen-navbar-------*/}
        <nav className="max-w-7xl mx-auto p-5 py-[24px]">
          <div className="items-center justify-between hidden lg:flex">
            <h2 className="text-[25px] font-medium ibm_font text-[#12F7D6]">
              <a className="flex items-center" href="#">
                <span>
                  <Image
                    className="mr-2"
                    src={klogo}
                    width={50}
                    height={42}
                    alt="Picture of the author"
                  />
                </span>
                KULDEEP
              </a>
            </h2>
            <ul className="flex items-center gap-6">
              <li>
                <a
                  className=" text-white font-normal text-xl ibm_font hover:text-[#12F7D6] ease-in-out duration-300"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-normal text-xl ibm_font hover:text-[#12F7D6] ease-in-out duration-300"
                  href="#"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-normal text-xl ibm_font hover:text-[#12F7D6] ease-in-out duration-300"
                  href="#"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-normal text-xl ibm_font hover:text-[#12F7D6] ease-in-out duration-300"
                  href="#"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-normal text-xl ibm_font hover:text-[#12F7D6] ease-in-out duration-300"
                  href="#"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  className=" text-white font-normal text-xl ibm_font hover:text-[#12F7D6] ease-in-out duration-300"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/*------small-screen-navbar--------*/}
          <div className="flex lg:hidden items-center justify-between">
            <h2 className="text-[25px] font-medium ibm_font text-[#12F7D6]">
              <a className="flex items-center" href="/">
                <span>
                  <Image
                    className="mr-2"
                    src={klogo}
                    width={50}
                    height={42}
                    alt="Picture of the author"
                  />
                </span>
                KULDEEP
              </a>
            </h2>
            <div
              onClick={() => setNav(true)}
              className="flex flex-col cursor-pointer h-5 justify-between z -50"
            >
              <span className=" h-[3.2px] w-7 bg-[#98FAEC] block rounded-3xl"></span>
              <span className=" h-[3px] w-7 bg-[#98FAEC] block rounded-3xl"></span>
              <span className=" h-[3.2px] w-7 bg-[#98FAEC] block rounded-3xl"></span>
            </div>
            <div
              className={
                nav === false
                  ? "w-0 min-h-screen absolute left-[-100%] duration-700 ease-linear top-0 text-center flex flex-col justify-center bg-[#292F36]"
                  : "w-full min-h-screen absolute left-0 top-0 duration-700 ease-linear text-center flex flex-col justify-center bg-[#292F36]"
              }
            >
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    className=" text-white font-normal text-xl ibm_font hover:text-[#12F7D6] ease-in-out duration-300"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className=" text-white font-normal text-xl ibm_font hover:text-[#12F7D6] ease-in-out duration-300"
                    href="#"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    className=" text-white font-normal text-xl ibm_font hover:text-[#12F7D6] ease-in-out duration-300"
                    href="#"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className=" text-white font-normal text-xl ibm_font hover:text-[#12F7D6] ease-in-out duration-300"
                    href="#"
                  >
                    Works
                  </a>
                </li>
                <li>
                  <a
                    className=" text-white font-normal text-xl ibm_font hover:text-[#12F7D6] ease-in-out duration-300"
                    href="#"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    className=" text-white font-normal text-xl ibm_font hover:text-[#12F7D6] ease-in-out duration-300"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="absolute right-10 top-10"
                >
                  X
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
