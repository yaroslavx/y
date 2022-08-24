import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectsItem";
import postyImg from "../public/assets/projects/posty.png";
import booking2 from "../public/assets/projects/booking2.png";
import streamImg1 from "../public/assets/projects/stream7.png";
import vidsImg from "../public/assets/projects/vids5.png";
import vidsImg1 from "../public/assets/projects/vids3.png";
import weatherImg from "../public/assets/projects/weather.png";
import upmiImg from "../public/assets/projects/upmi.png";
import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";

// from-gray-500 via-gray-400 to-gray-700

const UnderDevelopment = () => {
  return (
    <div
      id="development"
      className="w-full bg-[#f5f5f7] pt-4  dark:bg-[#0c0c0c] dark:text-white md:pt-5"
    >
      <p className="mx-4 w-fit bg-gradient-to-bl from-stone-300 via-stone-500 to-stone-900 bg-clip-text px-7 pt-9 pb-4 text-[48px] font-semibold text-transparent sm:mx-5  sm:text-[56px] md:mx-7 lg:mx-9">
        In Development
      </p>

      <div className="mx-4  bg-[#f5f5f7] dark:bg-[#0c0c0c] sm:mx-5 md:mx-7 lg:mx-9 ">
        <div className=" rounded-3xl text-center text-white  ">
          <ProjectItem
            title="Booking"
            description="The Movie and TV shows database"
            textColor="text-white"
            backgroundImg={booking2}
            projectUrl="/booking"
            layout="fill"
            h="h-[250px] md:h-[250px] lg:h-[525px]"
            buttonColor=""
          />
                    <Link href={"/booking"}>
            <div className="group relative">
              <IoIosAddCircle
                className={`absolute right-2 bottom-2 h-9 w-9 cursor-pointer text-black/20 transition-colors duration-200 ease-in-out group-hover:text-transparent`}
              />
              <IoIosAddCircleOutline
                className={`absolute right-2 bottom-2 h-9 w-9 cursor-pointer text-transparent transition-colors duration-200 ease-in-out group-hover:text-black/20`}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
