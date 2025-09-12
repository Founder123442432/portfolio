"use client";
import { SquareChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavBar() {
  const [MobileNavOpen, SetMobileNavOpen] = useState(false);
  const path = usePathname();
  const NavItems = ["Home", "About", "My Projects", "Contact", "CV"];
 useEffect(()=>{
if(MobileNavOpen){
  document.body.style="overflow:hidden"
}else{
  document.body.style="overflow:auto"
}
 },[MobileNavOpen])
 useEffect(()=>{
SetMobileNavOpen((el)=>false)
 },[path])
  return (
    <nav className="shadow-md tracking-wide relative backdrop-blur-3xl z-50">
      <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-3  min-h-[65px]">
        <span href="javascript:void(0)">
          <img src="/logo.png" alt="logo" className="w-56" />
        </span>

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3  max-lg:fixed text-wh max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            {NavItems.map((el, i) => (
              <Link
                key={i}
                href={
                  el == "Home"
                    ? "/"
                    : `/${el.toLowerCase().replace(/\s+/g, "")}`
                }
              >
                <li
                  className={`max-lg:border-b font-bold ${
                    path == "/" ? "text-black" : "text-black"
                  } hover:text-amber-300 transition duration-300 cursor-pointer max-lg:border-gray-300 max-lg:py-3 px-3`}
                >
                  {el}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex max-lg:ml-auto">
          {/*mobile navBar */}

          <AnimatePresence>
            {MobileNavOpen && (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:hidden absolute flex flex-col gap-y-3 pl-5 pt-19 text-3xl font-bold left-0 right-0 top-0 bottom-0 z-500 w-full bg-black h-screen"
              >
                {NavItems.map((el, i) => (
                  <Link
                    key={i}
                    href={el == "Home"
                    ? "/"
                    : `/${el.toLowerCase().replace(/\s+/g, "")}`}
                  >
                    <li className="cursor-pointer hover:bg-amber-400 duration-700 ease-initial py-5  px-5">
                      {el}
                    </li>
                  </Link>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
          <button
            onClick={() => SetMobileNavOpen((state) => !state)}
            className={`lg:hidden ${
              MobileNavOpen && "rotate-180"
            } cursor-pointer z-501 duration-500`}
          >
            <SquareChevronLeft size={40} />
          </button>
        </div>
      </div>
    </nav>
  );
}
