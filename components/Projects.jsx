import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectsItem";
import postyImg from "../public/assets/projects/posty.png";
import streamImg from "../public/assets/projects/stream9.jpg";
import streamImg1 from "../public/assets/projects/stream7.png";
import vidsImg from "../public/assets/projects/vids5.png";
import vidsImg1 from "../public/assets/projects/vids3.png";
import weatherImg from "../public/assets/projects/weather.png";
import upmiImg from "../public/assets/projects/upmi.png";
import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full bg-[#f5f5f7] pt-4  dark:bg-[#0c0c0c] dark:text-white md:pt-5"
    >
      <p className="mx-4 px-7 pt-9 pb-5 text-[56px] font-semibold bg-gradient-radial-at-br from-gray-500 via-gray-400 to-gray-700 bg-clip-text text-transparent  md:mx-5">
        Projects
      </p>

      <div className="mx-4 grid gap-4 bg-[#f5f5f7] dark:bg-[#0c0c0c] md:mx-5 md:grid-flow-col md:grid-cols-2   md:grid-rows-4 md:gap-5 lg:grid-cols-4 lg:grid-rows-2">
        <div className="hidden rounded-3xl text-center text-white md:col-span-2 md:row-span-1  md:row-start-1 lg:col-span-1 lg:row-span-2 lg:row-start-1 lg:inline">
          <ProjectItem
            title="Stream"
            description="The Movie and TV shows database"
            textColor="text-white"
            backgroundImg={streamImg}
            projectUrl="/stream"
            layout="fill"
            h="h-[250px] md:h-[250px] lg:h-[525px]"
            buttonColor="text-white"
          />
        </div>
        <div className="rounded-3xl text-center text-white md:col-span-2 md:row-span-1  md:row-start-1 lg:col-span-1 lg:row-span-2 lg:row-start-1 lg:hidden">
          <ProjectItem
            title="Stream"
            description="The Movie and TV shows database"
            textColor="text-white"
            backgroundImg={streamImg1}
            projectUrl="/stream"
            layout="fill"
            h="h-[525px] md:h-[250px] lg:h-[525px]"
            buttonColor="text-white"
          />
        </div>
        <div className="rounded-3xl text-center text-white md:col-span-1 md:row-span-1  md:row-start-2 lg:col-span-1 lg:row-span-1 lg:row-start-1">
          <ProjectItem
            title="Posty"
            description="Social network"
            textColor="text-black"
            backgroundImg={postyImg}
            projectUrl="/posty"
            layout="fill"
            h="h-[250px]"
            buttonColor=""
          />
          <Link href={"/posty"}>
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
        <div className="rounded-3xl text-center text-white md:row-span-1 md:row-start-3 lg:col-span-1 lg:row-span-1 lg:row-start-2">
          <ProjectItem
            title="Weather App"
            description=""
            textColor="text-white"
            backgroundImg={weatherImg}
            projectUrl="/weather"
            layout="fill"
            h="h-[525px] md:h-[250px]"
            buttonColor="text-white"
          />
        </div>
        <div className="hidden rounded-3xl text-center text-white md:col-span-2 md:row-span-1 md:row-start-4 lg:col-span-1 lg:row-span-2 lg:row-start-1 lg:inline">
          <ProjectItem
            title="Vids"
            description="Some nice videos"
            textColor="text-white"
            backgroundImg={vidsImg1}
            projectUrl="/vids"
            layout="fill"
            h="h-[250px] lg:h-[525px]"
            buttonColor="text-white"
          />
        </div>
        <div className="rounded-3xl text-center text-white md:col-span-2 md:row-span-1 md:row-start-4 lg:col-span-1 lg:row-span-2 lg:row-start-1 lg:hidden">
          <ProjectItem
            title="Vids"
            description="Some nice videos"
            textColor="text-white"
            backgroundImg={vidsImg}
            projectUrl="/vids"
            layout="fill"
            h="h-[250px] lg:h-[525px]"
            buttonColor="text-white"
          />
        </div>
        <div className="rounded-3xl text-center text-white md:col-span-1 md:row-span-2  md:row-start-2 md:mx-auto lg:col-span-1 lg:row-span-2 lg:row-start-1">
          
          <div className="relative flex h-[525px] rounded-3xl bg-transparent ">
            <p className="absolute right-[270px] top-[140px] bg-gradient-to-l from-stone-400 via-green-400 to-sky-600 bg-clip-text px-4 py-3 md:text-[25px] text-[48px] font-semibold text-transparent md:-top-2 md:left-0 w-fit">
              UPMI
            </p>
            <p className="absolute right-[286px] top-[182px] mt-8 py-3 text-end text-[19px] font-medium text-black dark:text-[white] md:hidden">
              All-new app that allows passengers to take a ride
            </p>
            <Link href={"/upmi"}>
            <div className="absolute  right-0 top-[26px] h-[473px] w-[232px] rounded-3xl shadow-2xl dark:shadow-none md:relative md:top-[52px] md:right-0">
              <Image
                src={upmiImg}
                objectFit="contain"
                className="rounded-3xl"
              />
            </div>
            </Link>
            <Link href={"/upmi"}>
            <div className="group relative">
              <IoIosAddCircle
                className={`absolute right-2 bottom-2 hidden h-9 w-9 cursor-pointer text-black/20 transition-colors duration-200 ease-in-out group-hover:text-transparent md:bottom-2 md:inline lg:bottom-2`}
              />
              <IoIosAddCircleOutline
                className={`absolute right-2 bottom-2 hidden h-9 w-9 cursor-pointer text-transparent transition-colors duration-200 ease-in-out group-hover:text-black/20 md:bottom-2 md:inline lg:bottom-2`}
              />
            </div>
            </Link>
            <Link href={"/upmi"}>
            <div className="absolute right-[286px] top-[430px] cursor-pointer rounded-full border-[2px] border-black p-1.5 px-4 font-medium text-black transition-all duration-500 ease-in-out hover:bg-black hover:text-[#f5f5f7] dark:border-white dark:bg-white dark:text-[#0c0c0c] dark:hover:bg-transparent dark:hover:text-white md:hidden">
              See more
            </div>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
