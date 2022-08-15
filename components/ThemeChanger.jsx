import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(theme === "light" ? false : true);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={() => 
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
        className={`${enabled ? "bg-transparent" : "bg-transparent"}
          relative inline-flex h-[33px] w-[53px] shrink-0 cursor-pointer rounded-full border-0 border-transparent hover:bg-gray-100 shadow-inner dark:bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-200 ease-in-out focus:outline-none `}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none m-1 inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out `}
        >
          {!enabled ? (
            <RiSunFill className="mx-[4px] mt-[4px] text-yellow-500" />
          ) : (
            <RiMoonFill className="mx-[4.5px] mt-[4.5px] text-blue-500" />
          )}
        </span>
      </Switch>
    </div>
  );
};
