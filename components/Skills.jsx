import Image from "next/image";
import React from "react";


const Skills = () => {
  return (
    <div
      id="techstack"
      className="pt-4 w-full bg-[#f5f5f7] dark:bg-[#0c0c0c]  dark:text-white md:pt-5 md:h-fit"
    >
           <p className="mx-4 px-7 pt-9 pb-5 text-[56px] font-semibold bg-gradient-to-br from-zinc-400 via-sky-600 to-indigo-600  bg-clip-text text-transparent md:mx-5">
           Tech Stack
      </p>
      <div className="m-auto mx-4 flex h-full px-7 py-9 pb-20 flex-col justify-center rounded-xl bg-gradient-to-bl from-zinc-400 via-sky-600 to-indigo-600 dark:bg-[#151515] md:mx-5">
        <p className="text-[21px] font-semibold text-white dark:text-[white]">
          My skills
        </p>
        {/* <p className="flex text-[19px] font-medium text-black dark:text-[white]">
          What I Can Do
        </p> */}
        <div className="relative mt-7 lg:ml-[3%] h-[430px] lg:h-56 transition-all duration-500 w-full">
          <div className="absolute left-[1%] top-[9%] md:left-[11%] md:top-[9%] lg:left-[15%] transition-all duration-500 h-fit w-fit rounded-3xl text-[40px] text-white ">
            <div className="h-1 w-10 mb-4 bg-white"></div>
            <p className="leading-none">Next.js</p>
          </div>
          <div className="absolute left-[1%] top-[41%] md:left-[5%] md:top-[41%] lg:left-[3%] transition-all duration-500 h-fit w-fit rounded-3xl text-[40px] text-white ">
            <div className="h-1 w-10 mb-4 bg-white"></div>
            <p className="leading-none">React</p>
          </div>
          <div className="absolute left-[1%] top-[75%] md:left-[17%] md:top-[75%] lg:top-[77%] transition-all duration-500  h-fit w-fit rounded-3xl text-[40px] text-white ">
            <div className="h-1 w-10 mb-4 bg-white"></div>
            <p className="leading-none">TypeScript</p>
          </div>
          <div className="absolute left-[61%] top-[0%] md:left-[49%] md:top-[0%] lg:left-[39%] lg:top-[14%] transition-all duration-500 h-fit w-fit rounded-3xl text-[40px] text-white ">
            <div className="h-1 w-10 mb-4 bg-white"></div>
            <p className="leading-none">Tailwind</p>
          </div>
          <div className="absolute left-[61%] top-[25%] md:left-[67%] md:top-[25%] lg:top-[7%] transition-all duration-500 h-fit w-[1px] md:w-fit rounded-3xl text-[40px] text-white ">
            <div className="h-1 w-10 mb-4 bg-white"></div>
            <p className="leading-none">React Native</p>
          </div>
          <div className="absolute  left-[61%] top-[63%] md:left-[63%] md:top-[63%] lg:left-[75%] transition-all duration-500 h-fit w-fit rounded-3xl text-[40px] text-white ">
            <div className="h-1 w-10 mb-4 bg-white"></div>
            <p className="leading-none">Firebase</p>
          </div>
          <div className="absolute  left-[61%] top-[89%] md:left-[55%] md:top-[89%] lg:left-[53%] transition-all duration-500 h-fit w-fit rounded-3xl text-[40px] text-white ">
            <div className="h-1 w-10 mb-4 bg-white"></div>
            <p className="leading-none">GitLab</p>
          </div>
          
      
         
        </div>
        {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="m-auto h-auto w-full ">
            <Image src={Html} className="rounded-l-xl" alt="/" />
          </div>

          <div className="rounded-xl p-6 shadow-md duration-200 ease-in dark:bg-[#222222] dark:shadow-none">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center text-[#000000]/80 dark:text-white">
                <h3>description</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-md duration-200 ease-in dark:bg-[#222222] dark:shadow-none">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center text-[#000000]/80 dark:text-white">
                <h3>description</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-md duration-300 ease-in dark:bg-[#222222] dark:shadow-none">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center text-[#000000]/80 dark:text-white">
                <h3>description</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-md duration-300 ease-in dark:bg-[#222222] dark:shadow-none">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center text-[#000000]/80 dark:text-white">
                <h3>description</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-md duration-300 ease-in dark:bg-[#222222] dark:shadow-none">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={Firebase} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center text-[#000000]/80 dark:text-white">
                <h3>description</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-md duration-300 ease-in dark:bg-[#222222] dark:shadow-none">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center text-[#000000]/80 dark:text-white">
                <h3>description</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-md duration-300 ease-in dark:bg-[#222222] dark:shadow-none">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center text-[#000000]/80 dark:text-white">
                <h3>description</h3>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
