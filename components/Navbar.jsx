import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MenuButton from "./MenuButton";
import { useTheme } from "next-themes";
import { ThemeChanger } from "./ThemeChanger";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("bg-white");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/stream" ||
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("bg-white");
      setLinkColor("#ffffff");
    } else {
      setNavBg("bg-white");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? ` fixed z-[100] h-[63px] w-full bg-white/20 backdrop-blur-2xl duration-300 ease-in-out dark:bg-transparent`
          : `fixed z-[100] h-[63px] w-full bg-white/20 backdrop-blur-2xl dark:bg-transparent`
      }
    >
      <div className="flex h-full w-full items-center justify-between px-9 md:px-16">
        <Link href="/">
          <div className="flex cursor-pointer items-center rounded-xl bg-white pl-2.5 transition-all duration-200 ease-in-out  dark:bg-black/20">
            <div className="text-transparent">__</div>
            <div className="text-5xl font-bold text-black dark:text-white">
              Y
            </div>
            <div className="text-transparent">_</div>
          </div>
        </Link>
        <div className="flex items-center ">
          <ThemeChanger className="" />
          <div className="ml-3 ">
            <ul
              style={{ color: `${linkColor}` }}
              className="hidden md:flex "
            >
              <Link href="/">
                <li className=" rounded-xl p-2 text-[14px] text-black transition-all duration-300 ease-in-out hover:bg-white dark:text-white dark:hover:bg-black/20">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li className="ml-3 rounded-xl p-2 text-[14px] text-black transition-all duration-300 ease-in-out hover:bg-white dark:text-white dark:hover:bg-black/20">
                  About
                </li>
              </Link>
              <Link href="/#techstack">
                <li className="ml-3 rounded-xl p-2 text-[14px] text-black transition-all duration-300 ease-in-out hover:bg-white dark:text-white dark:hover:bg-black/20">
                  Techstack
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-3 rounded-xl p-2 text-[14px] text-black transition-all duration-300 ease-in-out hover:bg-white dark:text-white dark:hover:bg-black/20">
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li className="ml-3 rounded-xl p-2 text-[14px] text-black transition-all duration-300 ease-in-out hover:bg-white dark:text-white dark:hover:bg-black/20">
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-3 mr-3 rounded-xl p-2 text-[14px] text-black transition-all duration-300 ease-in-out hover:bg-white dark:text-white dark:hover:bg-black/20">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="flex items-center md:hidden ">
              <MenuButton className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
