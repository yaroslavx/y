import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [massage, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.promise(
      emailjs.sendForm(
        "service_ym3hkyc",
        "template_k09l8db",
        form.current,
        "_Cb7wN2FgQtu5I6X2"
      ),
      {
        loading: "Sending...",
        success: "Successfully sent!",
        error: "Error when sending",
      }
    );
  };

  return (
    <div
      id="contact"
      className="w-full bg-[#f5f5f7] pt-4 dark:bg-[#0c0c0c] dark:text-white md:pt-5"
    >
      <p className="mx-4 w-fit bg-gradient-radial-at-br from-sky-400 to-blue-500 bg-clip-text px-7 pt-9 pb-4 text-[48px] font-semibold  text-transparent sm:text-[56px] sm:mx-5 md:mx-7 lg:mx-9">
        Contact
      </p>
      <div className="m-auto w-full">
        <div className="mx-4 grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 sm:mx-5 md:mx-7 lg:mx-9 lg:grid-cols-5">
          <div className="relative col-span-3 h-[305px] w-full  rounded-3xl  bg-gradient-radial-at-br from-sky-400 to-blue-500 px-7 py-9 dark:bg-[#151515]  lg:col-span-2 lg:h-full">
            <p className="text-[21px] font-semibold text-white dark:text-[white]">
              Yaroslav Yakupov
            </p>
            <p className="flex text-[19px] font-medium text-white dark:text-[white]">
              {`If there anything else you'd like to know about my life at the moment, contact me
              and let's talk.`}
            </p>
            <p className="flex text-[19px] font-medium text-white dark:text-[white]"></p>
            {/* <div>
              <Image
                className="rounded-xl duration-300 ease-in"
                src={ContactImg}
                alt="/"
              />
            </div> */}
            <div className="absolute bottom-9 w-full -ml-7">
              <div className=" flex items-center justify-center">
                <a href="https://github.com/yaroslavx">
                  <div className="cursor-pointer mr-4 rounded-full border-[2px] border-white p-2 px-7 font-medium text-white">
                    <FaGithub className="h-5 w-5 text-white" />
                  </div>
                </a>

                <a href="https://t.me/yaroslavxx">
                  <div className="cursor-pointer mr-4 rounded-full border-[2px] border-white p-2 px-7 font-medium text-white">
                    <FaTelegramPlane className="h-5 w-5 text-white" />
                  </div>
                </a>
                <Link href="/resume">
                  <a>
                    <div className="cursor-pointer  rounded-full border-[2px] border-white p-2 px-7 font-medium text-white">
                      <AiOutlinePaperClip className="h-5 w-5 text-white" />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-3 h-auto w-full rounded-3xl bg-white px-7 py-9 dark:bg-[#151516] ">
            <div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="md:grid-cols grid w-full gap-4 py-2">
                  <div className="flex flex-col">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      className="flex  rounded-xl border border-gray-300 p-3 outline-[#0071e3] dark:border dark:border-[#222222] dark:bg-[#222222]"
                      type="text"
                      name="from_name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex rounded-xl border border-gray-300 p-3 outline-[#0071e3] dark:border dark:border-[#222222] dark:bg-[#222222]"
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="flex flex-col pt-2">
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex resize-none rounded-xl border border-gray-300 p-3 outline-[#0071e3] dark:border dark:border-[#222222] dark:bg-[#222222]"
                    rows="5"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <input
                    disabled={!name || !email || !massage}
                    type="submit"
                    value="Send Message"
                    className="mt-9 w-fit rounded-full bg-[#0071e3] p-2 px-7 text-white enabled:cursor-pointer disabled:opacity-50 dark:text-white"
                  />
                  <Toaster />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-[222px]">
  
        </div>
      </div>
    </div>
  );
};

export default Contact;
