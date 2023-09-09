import React, { useState } from "react";


import { Outlet } from "react-router-dom";

import { FaFacebookSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import SideBar from "./sidebar";
import Navbar from "./Navbar";
import BreadCrumbs from "./breadcrumbs";


const Homepage = () => {
  const [open, setOpen] = useState(true);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <SideBar open={open} handleToggle={handleToggle} />
      <Navbar open={open} />
     
      <div
        className={`${
          open
            ? "absolute top-12 w-[82%] left-[18%] right-0 h-auto "
            : "absolute top-12 w-[94%] left-[6%] right-0 h-auto"
        } duration-500 px-5`}
      >
        <div className="py-3 capitalize">
        <BreadCrumbs/>
        </div>
      
        <Outlet />
        <div className="w-full flex flex-row justify-between items-center py-[10px] px-8">
          <span className="text-[16px] text-primary cursor-pointer">V1.0.1 Copyright &copy; 2023 Abhis</span>
          <div className="flex flex-row items-center gap-3">
            <FaFacebookSquare className="text-2xl text-sky-500 cursor-pointer"/>
            <FiInstagram className="text-2xl text-rose-500 cursor-pointer"/>
            <FaWhatsapp className="text-2xl text-green-500 cursor-pointer"/>
            <FaLinkedin className="text-2xl text-blue-500 cursor-pointer"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;