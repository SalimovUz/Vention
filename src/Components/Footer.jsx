import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div id="footer" className="w-[100%] bg-[#434345] flex flex-col items-end border ">
        <div className="w-[94%] flex items-start border border-gray-500">
          <div className="w-[60%] border border-[#434345] pt-[30px] pl-[30px]">
            <p className="text-white text-[23px] mb-[20px]">
              Subscribe to our newsletter for industry <br />
              insights and company news!
            </p>
            <div className="flex items-center bg-[#434345] justify-between w-[400px] h-[35px]">
              <input
                type="text"
                placeholder="Email adress*"
                className="bg-[#434345] w-full text-white outline-none"
              />
              <FaArrowRightLong className="text-[20px] text-white" />
            </div>
            <hr className="w-[400px] mb-[30px]" />

            <div className=" flex items-center gap-[10px]">
              <input type="checkbox" className="w-[20px] h-[20px]" />
              <p className="!text-[15px] text-gray-400">
                I agree to the <span className="underline">Privay Policy </span>
                 and give my permission my <br /> personal data for the purposes
                specified in the Privay Policy
              </p>
            </div>
          </div>
          <div className="w-[40%] flex items-start gap-[200px] pt-[30px] pl-[30px] border border-[#4343345]">
            <div className="mb-[50px]">
              <p className="text-[18px] text-gray-400 mb-[25px] ">About</p>
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                Company
              </p>
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                Portfolio
              </p>
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                Partnerships
              </p>
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                Newsroom
              </p>
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                Media Kit
              </p>
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                Careers
              </p>
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                Contact
              </p>
            </div>
            <div>
              <p className="text-[18px] text-gray-400 mb-[25px] ">
                Delivery Models
              </p>
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                Dedicated development
              </p>
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                teams
              </p>
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                Project-based delivery
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://ventionteams.com/_next/static/images/iso-d52fa14f616b2c18d46829f91e0a1a04.svg"
                alt=""
              />
              <img
                src="https://ventionteams.com/_next/image?url=https%3A%2F%2Fseal-newyork.bbb.org%2Flogo%2Fsehzbul%2Fbbb-87169039.png&w=256&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[94%] flex items-start border border-gray-500">
          <div className="w-[60%] border border-[#434345] pt-[30px] pl-[30px]">
            <p className="text-white text-[120px] mt-[120px]">vention</p>
          </div>
          <div className="w-[40%] flex h-[335px] items-start gap-[200px] pt-[30px] pl-[30px] border border-[#4343345]">
            <div className="mb-[50px]">
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                LinkedIn
              </p>
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                Instagram
              </p>
              <p className="text-[18px] w-[100px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                X (formerly Twitter)
              </p>
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                Youtube
              </p>
            </div>
            <div>
              <p className="text-[18px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                US: +1 (718) 374-5043
              </p>
              <p className="text-[18px]  w-[200px] text-white mb-[5px] hover:cursor-pointer hover:text-red-800">
                575 Lexington Avenue, 14th
              </p>
              <p className="text-[18px]  text-white hover:cursor-pointer hover:text-red-800">
                New York, NY 10022
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="https://ventionteams.com/_next/static/images/iso-d52fa14f616b2c18d46829f91e0a1a04.svg"
                alt=""
              />
              <img
                src="https://ventionteams.com/_next/image?url=https%3A%2F%2Fseal-newyork.bbb.org%2Flogo%2Fsehzbul%2Fbbb-87169039.png&w=256&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
