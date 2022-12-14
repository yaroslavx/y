import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";

const ProjectItem = ({
  title,
  backgroundImg,
  description,
  projectUrl,
  h,
  layout,
  height,
  buttonColor,
  textColor,
}) => {
  return (
    <Link href={projectUrl}>
      <div className={`relative  ${h} w-full rounded-3xl`}>
        <div className={` absolute w-full ${h} rounded-3xl`}>
          <Image
            height={height}
            className="rounded-3xl"
            alt="/"
            src={backgroundImg}
            layout={layout}
            objectFit="cover"
          />
        </div>
        <div className="absolute left-0 top-0 h-full w-full rounded-3xl "></div>
        <div className="absolute h-full w-full rounded-3xl px-7 py-9">
          <span
            className={`absolute left-0 top-0 px-7 py-9 text-[21px] font-semibold ${textColor} `}
          >
            {title}
          </span>
          {/* <p className={`absolute px-7 py-9  left-0 mt-8 top-0 text-start text-[19px] font-medium ${textColor}`}>
          {description} 
        </p> */}
          <div className="group">
            <IoIosAddCircle
              className={`absolute right-2 bottom-2 h-9 w-9 cursor-pointer ${buttonColor} transition-colors duration-200 ease-in-out group-hover:text-transparent`}
            />
            <IoIosAddCircleOutline
              className={`absolute right-2 bottom-2 h-9 w-9 cursor-pointer text-transparent transition-colors duration-200 ease-in-out group-hover:${buttonColor}`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
