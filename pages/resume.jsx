import React from "react";
import Head from "next/head";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta
          name="description"
          content="I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
    <div className="bg-[#f5f5f7] dark:bg-[#0c0c0c] h-screen">
    <div className="mx-auto max-w-[940px] p-2 pt-[120px] ">
    <p className="mx-4 text-center bg-gradient-to-br from-[#fd3a50] via-[#f95a5a] to-[#faa040] bg-clip-text px-7 text-[56px]  font-semibold text-transparent md:mx-5">
    Resume
      </p>
      <p className="mx-4 text-center bg-gradient-to-br from-[#fd3a50] via-[#f95a5a] to-[#faa040] bg-clip-text text-[56px]  font-semibold text-transparent md:mx-5">
    Yaroslav Yakupov
      </p>
      
      
        
        

        
      
      </div>
    </div>
      
    </>
  );
};

export default resume;
