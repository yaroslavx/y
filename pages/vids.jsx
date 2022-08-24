import Image from "next/image";
import React from "react";
import vidsPage from "../public/assets/projects/vidsPage.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { XCircleIcon } from "@heroicons/react/outline";
import { IoIosCloseCircle, IoIosCloseCircleOutline } from "react-icons/io";
import { SiFirebase } from "react-icons/si";

const property = () => {
  return (
    <div className="w-full pt-[77px] pb-[222px]  dark:bg-black">
      <div className="relative mx-4 h-[50vh] bg-white dark:bg-black sm:mx-5 md:mx-7 lg:mx-9">
        <a href="https://yaroslavx.github.io/vids/">
          <div className="absolute top-0 left-0 z-10 h-[50vh] w-full" />
          <div className="relative h-full w-full">
            <Image
              className="rounded-3xl"
              layout="fill"
              objectFit="cover"
              src={vidsPage}
              priority
              alt="/"
            />
          </div>
        </a>
      </div>

      <div className="m-auto bg-white dark:bg-black">
        <p className="mx-4 w-fit  bg-gradient-to-tr from-slate-500 to-yellow-100 bg-clip-text px-7 pt-9 pb-5 text-[48px] font-semibold text-transparent sm:mx-5 sm:text-[56px] md:mx-7 lg:mx-9">
          Vids
        </p>
        <div className=" mx-4 grid gap-4 sm:mx-5 sm:gap-5 md:mx-7  md:grid-cols-5 md:gap-7 lg:mx-9 lg:gap-9">
          <div className="col-span-4 md:col-span-3">
            <div
              style={{
                background:
                  "conic-gradient(at top,  rgb(254, 249, 195), rgb(100, 116, 139))",
              }}
              className="relative h-full rounded-3xl bg-gradient-to-tl from-sky-700 via-amber-300 to-stone-400 px-7  py-9 dark:bg-black "
            >
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
              <p className="mb-[77px] flex text-[19px]  font-medium text-white dark:text-[white]">
                Vids is a video-gallery website that allows you to view some
                nice videos.
              </p>
              <div className="absolute bottom-[26px] mt-9 flex">
                <a
                  href="https://github.com/yaroslavx/vids"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="mr-4 rounded-full border-[2px] border-white p-1.5 px-4 font-medium text-white">
                    Code
                  </div>
                </a>
                <a
                  href="https://yaroslavx.github.io/vids/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full border-[2px] border-white p-1.5 px-4 font-medium text-white">
                    Demo
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2 ">
            <div className="h-fit rounded-3xl bg-[#f4f4f4] dark:bg-[#151516]">
              <div className="px-7 py-9">
                <p className="text-[21px] font-semibold text-black dark:text-white">
                  Tech Stack
                </p>
                <div className="flex">
                  <p className="flex text-[19px] font-medium text-black/70 dark:text-white/70">
                    React, Vimeo API
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="mt-4 sm:mt-5 md:mt-7 lg:mt-9 h-fit rounded-3xl bg-[#f4f4f4] dark:bg-[#151516]">
              <div className="px-7 py-9">
                <p className="text-[21px] font-semibold text-black dark:text-white">
                Features
                </p>
                <div className="flex">
                  <p className="flex text-[19px] font-medium text-black/70 dark:text-white/70">
                    Main page animation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default property;
