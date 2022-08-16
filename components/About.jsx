import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";
import newProject from "../public/assets/new.png";

function About() {
  return (
    <div
      id="about"
      className="w-full items-center bg-[#f5f5f7] pt-4 dark:bg-[#0c0c0c] md:pt-5"
    >
      <p className="mx-4 bg-gradient-to-br from-[#fd3a50] via-[#f95a5a] to-[#faa040] bg-clip-text px-7 pt-9 pb-5 text-[48px] font-semibold  text-transparent sm:text-[56px] md:mx-5">
        About
      </p>
      <div className="m-auto mx-4 grid grid-rows-2 gap-4 md:mx-5 md:grid-cols-3 md:grid-rows-1 md:gap-x-5">
        <Link href="/resume">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#fd3a50] via-[#f95a5a] to-[#faa040] px-7 py-9 dark:bg-[#121212] dark:text-white md:col-span-2">
            <p className="text-[21px] font-semibold text-white dark:text-[white]">
              Who I Am
            </p>
            <p className="flex text-[19px] font-medium text-white dark:text-[white]">
              {`My name is Yaroslav, 21, still a student, looking for a part time job I can do while still at University, ideally working remotely. I'm skilled with React and some Python, and I am trying to learn other programming languages, step by step.`}
            </p>
            <div className="group">
              <IoIosAddCircle className="absolute right-2 bottom-2 h-9 w-9 cursor-pointer text-white transition-colors duration-200 ease-in-out group-hover:text-transparent" />
              <IoIosAddCircleOutline className="absolute right-2 bottom-2 h-9 w-9 cursor-pointer text-transparent transition-colors duration-200 ease-in-out group-hover:text-white" />
            </div>
          </div>
        </Link>

        <Link href="/upmi">
          <div className="relative h-72 rounded-3xl px-7 py-9 md:col-span-1">
            <Image
              src={newProject}
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            <div className="absolute left-0 top-0 h-full w-full rounded-3xl bg-gradient-to-b from-gray-700/40 to-transparent "></div>
            <p className="absolute text-[21px] font-semibold text-white dark:text-[white]">
              New
            </p>
            <p className="absolute mt-8 pr-7 text-[19px] font-medium text-white dark:text-[white]">
              All-new transport app
            </p>
            <div className="group">
              <IoIosAddCircle className="absolute right-2 bottom-2 h-9 w-9 cursor-pointer text-white transition-colors duration-200 ease-in-out group-hover:text-transparent" />
              <IoIosAddCircleOutline className="absolute right-2 bottom-2 h-9 w-9 cursor-pointer text-transparent transition-colors duration-200 ease-in-out group-hover:text-white" />
            </div>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default About;
