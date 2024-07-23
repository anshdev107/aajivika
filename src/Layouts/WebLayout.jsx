import React from "react";
import HeroBg from "../images/hero-bg.png";
import logo from "../images/logo.png";
import videoImg from "../images/video-img.png";
import { IconMenu2, IconPlayerPlayFilled } from "@tabler/icons-react";
import manLaptopVideo from "../images/man-with-laptop.png";
import vrboxImg from "../images/vrbox.png";
import "animate.css";
const WebLayout = ({ children }) => {
  const navBar = [
    { name: "home" },
    { name: "about us" },
    { name: "courses" },
    { name: "WBB" },
    { name: "journey guidance" },
    { name: "seminars" },
    { name: "questionaire" },
    { name: "contact us" },
  ];
  return (
    <div>
      <div className="bg-[url('/public/hero-bg.png')] bg-cover bg-bottom">
        <div className="w-full" style={{ zIndex: "10000" }}>
          <div className="w-full py-5 flex justify-between px-5 md:px-10 2xl:px-20">
            <div className="logo">
              <img className="w-44" src={logo} />
            </div>
            <div className="hidden xl:flex justify-center gap-10 items-center w-3/4 2xl:w-3/5">
              {navBar.map((nav, ind) => {
                return (
                  <div key={ind} className="text-white capitalize">
                    {nav.name}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end">
              <button className="hidden lg:block text-xl text-transparent bg-gradient-to-r from-[#e961ff] to-blue-500 bg-clip-text border-2 gradient-border px-4 py-2 hover:bg-purple-400 hover:text-white transition duration-300 font-bold">
                Be a Part
              </button>
              <button className="lg:hidden">
                <IconMenu2 className="h-6 w-6 bg-clip-text text-white" />
              </button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center gap-10 items-center w-full mt-2 xl:hidden">
            {navBar.map((nav, ind) => {
              return (
                <div key={ind} className="text-white capitalize">
                  {nav.name}
                </div>
              );
            })}
          </div>
          <div className="text-center lg:mt-10 xl:mt-16 flex justify-center w-full">
            <div>
              <p className="text-xl capitalize text-transparent bg-gradient-to-tr from-gradient-purple from-20% via-gradient-dark-blue via-40% to-gradient-blue to-80% bg-clip-text cursor-pointer">
                About Aajivika
              </p>
              <div className="w-full flex justify-center">
                <p className="mt-5 px-5 md:px-0 md:w-2/4 text-white text-lg">
                  The Aajivika Initiative by Ojasvi Foundation not only caters
                  to students' individual needs but also opens doors to a
                  brighter future outside the confines of traditional education.
                </p>
              </div>
            </div>
          </div>
          <button className="relative flex px-5 md:px-10 mt-10 justify-center items-center w-full">
            <img
              className="rounded-3xl w-full md:w-4/5 lg:w-1/2 xl:w-1/2 2xl:w-2/5"
              src={videoImg}
              alt="Modal video thumbnail"
            />
            <div className="rounded-full absolute flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out h-14 w-14 bg-gradient-to-tr from-gradient-purple from-20% via-gradient-dark-blue via-40% to-gradient-blue to-80%">
              <IconPlayerPlayFilled className="h-10 w-10 text-white" />
            </div>
          </button>
          <div className="absolute animate__animated animate__pulse animate__infinite	 hidden lg:block lg:top-60 left-0 xl:left-5 2xl:left-16 2xl:top-60 ">
            <img
              src={manLaptopVideo}
              className="w-52 lg:w-3/6 xl:w-3/5 2xl:w-4/5"
              alt="astronaut"
            />
          </div>
          <div className="absolute animate__animated animate__flash animate__slow  animate__infinite hidden lg:block lg:top-56 xl:top-48 lg:right-10 2xl:top-80 2xl:right-40">
            <img
              src={vrboxImg}
              className="w-52 xl:w-80 2xl:w-96"
              alt="astronaut"
            />
          </div>
        </div>
        <section class="wrapper">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </section>
      </div>
      <div className="mt-44">{children}</div>
    </div>
  );
};

export default WebLayout;
