import React from "react";

function Main() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-white to-[#f5f5f7] text-center dark:bg-gradient-to-b dark:from-black dark:to-[#0c0c0c]">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <h1 className="text-5xl text-black dark:text-white sm:text-7xl">
            Hey, im{" "}
            <span className="bg-gradient-to-br from-cyan-500 to-blue-500  bg-clip-text text-transparent">
              YY
            </span>
          </h1>
          <h1 className="text-5xl text-black dark:text-white sm:text-7xl">
            A Front-End Developer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
