import React from "react";

const Skills = () => {
  return (
    <div
      id="techstack"
      className="w-full bg-[#f5f5f7] pt-4 dark:bg-[#0c0c0c]  dark:text-white md:h-fit md:pt-5"
    >
      <p className="mx-4 bg-gradient-to-br from-zinc-400 via-sky-600 to-indigo-600 bg-clip-text px-7 pt-9 pb-4 text-[48px] font-semibold  text-transparent sm:text-[56px] sm:mx-5 md:mx-7 lg:mx-9">
        Tech Stack
      </p>
      <div className="m-auto mx-4 flex h-full flex-col justify-center rounded-xl bg-gradient-to-bl from-zinc-400 via-sky-600 to-indigo-600 px-7 py-9 pb-20 dark:bg-[#151515] sm:mx-5 md:mx-7 lg:mx-9">
        <p className="text-[21px] font-semibold text-white dark:text-[white]">
          My skills
        </p>
        <div className="relative mt-7 h-[430px] w-full transition-all duration-500 lg:ml-[3%] lg:h-56">
          <div className="absolute left-[1%] top-[9%] h-fit w-fit rounded-3xl text-[40px] text-white transition-all duration-500 md:left-[11%] md:top-[9%] lg:left-[15%] ">
            <div className="mb-4 h-1 w-10 bg-white"></div>
            <p className="leading-none">Next.js</p>
          </div>
          <div className="absolute left-[1%] top-[41%] h-fit w-fit rounded-3xl text-[40px] text-white transition-all duration-500 md:left-[5%] md:top-[41%] lg:left-[3%] ">
            <div className="mb-4 h-1 w-10 bg-white"></div>
            <p className="leading-none">React</p>
          </div>
          <div className="absolute left-[1%] top-[75%] h-fit w-fit rounded-3xl text-[40px] text-white  transition-all duration-500 md:left-[17%] md:top-[75%] lg:top-[77%] ">
            <div className="mb-4 h-1 w-10 bg-white"></div>
            <p className="leading-none">TypeScript</p>
          </div>
          <div className="absolute left-[53%] top-[0%] h-fit w-fit rounded-3xl text-[40px] text-white transition-all duration-500 sm:left-[61%] md:left-[49%] md:top-[0%] lg:left-[39%] lg:top-[14%] ">
            <div className="mb-4 h-1 w-10 bg-white"></div>
            <p className="leading-none">Tailwind</p>
          </div>
          <div className="absolute left-[53%] top-[25%] h-fit w-[1px] rounded-3xl text-[40px] text-white transition-all duration-500 sm:left-[61%] md:left-[67%] md:top-[25%] md:w-fit lg:top-[7%] ">
            <div className="mb-4 h-1 w-10 bg-white"></div>
            <p className="leading-none">React Native</p>
          </div>
          <div className="absolute  left-[53%] top-[61%] h-fit w-fit rounded-3xl text-[40px] text-white transition-all duration-500 sm:left-[61%] md:left-[63%] md:top-[63%] lg:left-[75%] ">
            <div className="mb-4 h-1 w-10 bg-white"></div>
            <p className="leading-none">Firebase</p>
          </div>
          <div className="absolute  left-[53%] top-[93%] h-fit w-fit rounded-3xl text-[40px] text-white transition-all duration-500 sm:left-[61%] md:left-[55%] md:top-[89%] lg:left-[53%] ">
            <div className="mb-4 h-1 w-10 bg-white"></div>
            <p className="leading-none">GitLab</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
