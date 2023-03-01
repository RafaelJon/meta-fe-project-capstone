import React, { useEffect, useRef, useState } from "react";

import Navigation from "./Navigation";

import "./styles.css";
import SideNavigation from "./SideNavigation";
import { navigation } from "./constants";

const Header = () => {
  const [show, setShow] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header-wrapper" ref={headerRef}>
        <div className="section-container header-container">
          <SideNavigation onClick={() => setShow(true)} />
          <div className="header-logo-container">
            <img src="/Logo.svg" alt="logo" className="header-logo-container" />
          </div>
          <Navigation />
          <div className="cart-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width={30}
              style={{ margin: "auto" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
        </div>
      </header>

      <div
        className={`nav-backdrop  ${show ? "nav-backdrop-show" : ""}`}
        onClick={() => setShow(false)}
      ></div>
      <nav className={`nav-side  ${show ? "nav-side-show" : ""}`}>
        <div className="nav-side-header">
          <img src="/Logo.svg" alt="logo" className="header-logo-container" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            width={30}
            onClick={() => setShow(false)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul className="nav-side-list">
          {navigation.map((nav, idx) => (
            <li key={`side-nav-${idx}`}>
              <a
                href={nav.path}
                onClick={() => setShow(false)}
                className="nav-item"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
