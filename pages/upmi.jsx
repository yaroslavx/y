import Image from "next/image";
import React from "react";
import upmiImg from "../public/assets/projects/upmiPage.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { XCircleIcon } from "@heroicons/react/outline";
import { IoIosCloseCircle, IoIosCloseCircleOutline } from "react-icons/io";
import { SiFirebase } from "react-icons/si";

const property = () => {
  return (
    <div className="w-full pt-[77px] dark:bg-black">
      <div className="relative mx-auto h-[50vh] bg-white px-4 dark:bg-black md:px-5">
        <a href="https://github.com/yaroslavx/upmi">
          <div className="absolute top-0 left-0 z-10 h-[50vh] w-full" />
          <div className="relative h-full w-full rounded-3xl">
            <Image
              className="rounded-3xl"
              layout="fill"
              objectFit="cover"
              src={upmiImg}
              priority
              alt="/"
            />
          </div>
        </a>
      </div>

      <div className="m-auto bg-white dark:bg-black">
        <p className="mx-4 bg-gradient-to-l from-stone-400 via-green-400 to-sky-600 bg-clip-text px-7 pt-9 pb-5 text-[56px] font-semibold text-transparent md:mx-5 ">
          UPMI
        </p>
        <div className=" grid gap-4  px-4 md:grid-cols-5  md:gap-5 md:px-5">
          <div className="col-span-4 md:col-span-3">
            <div className="relative h-fit rounded-3xl bg-gradient-to-tl from-green-400 to-sky-600 px-7 py-9  dark:bg-black ">
              <p className="text-[21px] font-semibold text-white dark:text-[white]">
              Overview
              </p>
              <Link href="/#projects">
                {/* <IoIosCloseCircle className=" absolute right-2 top-2 h-9 w-9 cursor-pointer text-white duration-200 transition-colors ease-in-out hover:text-gray-100" /> */}
                <div className="group absolute right-2 top-2">
                  <IoIosCloseCircle
                    className={`absolute -left-9  h-9 w-9 cursor-pointer text-white transition-colors duration-200 ease-in-out group-hover:text-transparent`}
                  />
                  <IoIosCloseCircleOutline
                    className={`absolute -left-9 h-9 w-9 cursor-pointer text-transparent transition-colors duration-200 ease-in-out group-hover:text-white`}
                  />
                </div>
              </Link>
              <p className="flex text-[19px] font-medium text-white dark:text-[white]">
                Upmi is a platform where those who drive and deliver can connect
                with riders, eaters, and restaurants. In cities where Upmi is
                available, you can use the Upmi app to request a ride. When a
                nearby driver accepts your request, the app displays an
                estimated time of arrival for the driver heading to your pickup
                location.
              </p>
              <div className="mt-9 flex gap-x-4">
                <a
                  href="https://github.com/yaroslavx/upmi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="  rounded-full border-[2px] border-white p-1.5 px-4 font-medium text-white">
                    Code
                  </div>
                </a>
                <a
                  href="https://streaming-app-yaroslavx.vercel.app/login"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </div>
            </div>
          </div>
          <div className="col-span-4 mb-[222px] h-fit rounded-3xl bg-[#f4f4f4] dark:bg-[#151516] md:col-span-2">
            <div className="px-7 py-9">
              <p className="text-[21px] font-semibold text-black dark:text-white">
                Tech Stack
              </p>
              <div className="flex">
                <p className="flex text-[19px] font-medium text-black dark:text-white">
                  React Native, Google API
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default property;
