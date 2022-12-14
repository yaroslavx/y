import React from "react";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const resume = () => {
  return (
    <div className=" bg-white pb-72 text-black dark:bg-[#0c0c0c]  dark:text-white">
      <Head>
        <title>Resume</title>
        <meta
          name="description"
          content="I'm a front-end web developer specializing in building exceptional digital experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-4 h-full sm:mx-5 md:mx-7 lg:mx-9">
        <div className="mx-auto max-w-[700px] pt-[77px] ">
          <p className="mx-4 bg-gradient-to-br from-[#fd3a50] via-[#f95a5a] to-[#faa040] bg-clip-text px-7 text-center text-[39px] font-semibold  text-transparent sm:text-[56px] md:mx-5">
            Resume
          </p>
          <p className="mx-4 bg-gradient-to-br from-[#fd3a50] via-[#f95a5a] to-[#faa040] bg-clip-text text-center text-[39px] font-semibold  text-transparent sm:text-[56px] md:mx-5">
            Yaroslav Yakupov
          </p>
          <div className="mt-4 text-center text-[21px] font-semibold uppercase tracking-wider">
            <div className="hidden sm:block">
              <p>Web Development Complex Problem Solving</p>
            </div>
            <div className="block sm:hidden">
              <p className="">Web Development</p>
              <p>Complex Problem Solving</p>
            </div>
          </div>
          <p className="mt-2">
            Analytical, innovative, and motivated web development professional
            with experience in customer service, team leadership, and
            organizational effectiveness in fast-paced and challenging
            environments. Adept at developing strategies and driving streamlined
            operations. Diverse analytical skills, team collaboration, and
            relationship building. Consummate professional, and motivated
            leader, with solid interpersonal abilities and complex
            problem-solving skills. Effective and proven track record of
            critical thinking, idea generation, and optimizing efficiencies.
          </p>
          <h5 className=" text-center text-[21px] font-semibold">I can do:</h5>
          <p className="">Good communication</p>
          <p className="">Teamwork </p>
          <p className="">Creativity and willingness to learn</p>
          <p className="">Problem-solving </p>

          {/* Skills */}
          <div className="mt-5 text-center">
            <h5 className=" text-center text-[21px] font-semibold">
              Technical Skills
            </h5>
            <div className="mt-1 w-full ">
              <p className="text-start">
                Frameworks: React, NextJs, React Native
              </p>
              <p className="text-start">
                Styling: Styled Components, Tailwind, CSS
              </p>
              <p className="text-start">
                Tool/Methods: TypeScript, Redux, Recoil, React-router, HOC
              </p>
              <p className="text-start">Testing: Jest, React Testing Library</p>
              <p className="text-start">Backend (Basics): Express, NodeJs</p>
              <p className="text-start">Database Systems: mongoDB, Firebase</p>
              <p className="text-start">
                Miscellaneous: git, SOLID, Linux Terminal
              </p>
              <p className="mt-3 text-start">
                Experience writing applications with REST API
              </p>
              <p className="text-start">
                Good knowledge of available NPM modules
              </p>
            </div>
          </div>
          <div className="mt-5 text-center">
            <h5 className=" text-center text-[21px] font-semibold">
              Other Skills
            </h5>
            <p className="mt-1">Figma Illustrator Photoshop</p>
          </div>

          <h5 className="mt-5 text-center text-[21px] font-semibold">
            Professional Experience
          </h5>
          <div className="mt-3">
            <p className="">
              <span className="text-[19px] font-semibold">Content Manager</span>
            </p>
            <p className="font-medium">
              Umschool{" "}
              <span className="text-gray-500">
                May 2021 ??? July 2022, Saint-Petersburg, Russia
              </span>
            </p>
            <p>
              Managing process of creating educational content in informatics.
            </p>

            <p className="mt-3">
              <span className="text-[19px]  font-semibold">
                Curator and moderator of informatics in online school
              </span>
            </p>
            <p className="font-medium">
              Umschool{" "}
              <span className="text-gray-500">
                March 2021 ??? July 2022, Saint-Petersburg, Russia
              </span>
            </p>
            <p>
              Managing process of students education, help with theoretical
              problems over informatics.
            </p>
            {/* 
            <p className="mt-3">
              <span className="text-[19px]  font-semibold">
                Audit of online school
              </span>
            </p>
            <p className="font-medium">
              Umschool{" "}
              <span className="text-gray-500">
                June 2021 ??? November 2021, Saint-Petersburg, Russia
              </span>
            </p>
            <p>
              Checking materials for any type of nonconformity before
              publication.
            </p>

            <p className="mt-3">
              <span className="text-[19px]  font-semibold">
                Graphic Designer
              </span>
            </p>
            <p className="font-medium">
              Umschool{" "}
              <span className="text-gray-500">
                September 2021 ??? February 2021, Saint-Petersburg, Russia
              </span>
            </p>
            <p>
              Creating educational content for printing. Creating presentations.
            </p> */}
          </div>

          <div className="mt-5 text-center">
            <h5 className="text-center text-[21px] font-semibold">Education</h5>
            <p className="mt-2 text-start">
              <span className="text-[19px] font-semibold">
                Saint Petersburg Mining University
              </span>
            </p>
            <p className="text-start font-medium">
              4rd course of Information technologies in management.{" "}
              <span className="text-gray-500">Saint-Petersburg, Russia</span>
            </p>
          </div>

          <div className="mt-5 text-center">
            <h5 className="mt-1 text-center text-[21px] font-semibold">
              Languages
            </h5>
            <p className="">Russian, English: C1 Advanced</p>
          </div>

          <div className="mt-5 text-center">
            <p className="mt-1 text-center text-[21px] font-semibold">
              Contacts
            </p>
            <a
              href="https://drive.google.com/file/d/1hvG72BS-fsRZh04eb8EDENnULyIcKtXY/view?usp=sharing"
              className="mt-1"
            >
              Resume.pdf
            </a>
            <p className="mt-1">yakupov.yaroslav@icloud.com</p>
            <a
              href="https://t.me/yaroslavxx"
              className="mx-auto mt-1 flex w-fit items-center"
            >
              <div className=" ml-2 mr-1.5 rounded-lg bg-white p-0.5">
                <BsTelegram className="h-[22px] w-[22px] cursor-pointer text-[#0088cc]" />
              </div>
              @yaroslavxx
            </a>

            <p className="mt-1.5">+7 922 930 94 05</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
