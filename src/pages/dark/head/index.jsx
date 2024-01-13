import React, { useState, useEffect } from "react";
import './style.css'

const Head = () => {
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
        className={`header fixed w-full ${scrolled
          ? "bg-[#101010] transition ease-in duration-3000  shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]"
          : " transition ease-linear duration-3000"
          }`}
      >
        {scrolled ?
          (
            <div className="dark__head-content">
              <p className="dark__head-name">Coming Soon</p>
              <div className="dark__head-items">
                <p className="dark__head-itemm">HOME</p>
                <p className="dark__head-item">ABOUT US</p>
                <p className="dark__head-item">WORK</p>
                <p className="dark__head-item">CONTACT</p>
              </div>
            </div>
          )
          : ''}
      </header>

      {/* FULL SCREEN SEARCH */}

    </div>
  )
}

export default Head