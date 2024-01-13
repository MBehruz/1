import React, { useState, useEffect } from "react";
import './style.css'


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the state
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header
        className={`header fixed justify-center w-full ${scrolled
          ? "bg-[#fff]  transition ease-in duration-3000  shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]"
          : " transition ease-linear duration-3000"
          }`}
      >
        {scrolled ?
          (
            <div className="head-container grid justify-center items-center">
              <div className="head-content  h-16">
                <p className="head-name">Coming Soon</p>
                <div className="head-items flex  gap-3 items-center text-center">
                  <p className="head-item text-[10px] font-bold text-[#fd9426] tracking-[-0.5px] ">HOME</p>
                  <p className="head-item text-[10px] font-bold text-[#777777] tracking-[-0.5px]">ABOUT US</p>
                  <p className="head-item text-[10px] font-bold text-[#777777] tracking-[-0.5px]">WORK</p>
                  <p className="head-item text-[10px] font-bold text-[#777777] tracking-[-0.5px]">CONTACT</p>
                </div>
              </div>
            </div>
          )
          : ''}
      </header>

      {/* FULL SCREEN SEARCH */}

    </div>
  )
}

export default Header