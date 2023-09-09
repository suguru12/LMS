
import React, { Fragment } from "react";
import {
  FaBars,
  FaBuilding,
  FaBullhorn,
  FaCalendarWeek,
  FaChevronLeft,
  FaChevronRight,
  FaClipboardList,
  FaFile,
  FaGraduationCap,
  FaHome,
  FaPhone,
  FaPlusSquare,
  FaUser,
  FaUserGraduate,
  FaUserPlus,
} from "react-icons/fa";
import rightMenu from "../assets/rightmenu.png";
import { NavLink, useLocation } from "react-router-dom";
import abhis from "../assets/abhis.png";
import abhis_logo from "../assets/abhis.png";

const SideBar = ({ handleToggle, open }) => {

 
  const Menus = [
    { title: "Home", icon: <FaHome/>,path:"/homepage/home"},
    { title: "Branches", icon:  <FaBuilding />,path:"/homepage/branch" },
    { title: "Faculty", icon: <FaUser/>,path:"/homepage/faculty"},
    { title: "Students ", icon: <FaUserGraduate/>,path:"/homepage/student" },
    { title: "Courses", icon:<FaFile/> ,path:"/homepage/course"},
    { title: "Batches", icon: <FaClipboardList/>,path:"/homepage/batch" },
    { title: "Exams ", icon:<FaGraduationCap/> ,path:"/homepage/exam"},
    { title: "Results", icon:<FaPlusSquare/> ,path:"/homepage/result"},
    { title: "Attendance", icon: <FaCalendarWeek/>,path:"/homepage/attendance" },
    { title: "Announcements", icon: <FaBullhorn/> ,path:"/homepage/announcement"},
    { title: "Admin", icon: <FaPhone/>,path:"/homepage/admin" },
    { title: "Support", icon: <FaUserPlus/>,path:"/homepage/support" },
  ];

  return (
    <>
      <div
        className={`${
          open ? "w-[18%] " : "w-[6%]"
        } bg-custom-green  left-0 fixed duration-500 h-screen scrollbar-thin scrollbar-thumb-gray-700  scrollbar-black overflow-y-scroll`}
      >
        <div className="w-full border-b p-4 h-[92px]">
          {open ? (
            <>
              <div className="w-full flex flex-row items-center gap-4">
                <div className="flex flex-row items-center">
                  <img
                    src={abhis}
                    className={` w-[55px] cursor-pointer h-[44px] `}
                  />
                  <h1 className="text-[45px] text-white font-bold mt-1">
                    bhis
                  </h1>
                </div>

                <img
                  alt="rightmenu"
                  src={rightMenu}
                  className={`cursor-pointer mt-4 w-10 h-10  text-gray-900
             `}
                  onClick={handleToggle}
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-full flex justify-center items-center h-full ">
                <FaBars
                  className={` cursor-pointer w-7 h-7 text-white
             `}
                  onClick={handleToggle}
                />
              </div>
            </>
          )}
        </div>
        <div className={`w-full flex flex-col gap-2 py-4 `}>
          {Menus.map((menu, id) => (
            <Fragment key={id}>
              <NavLink
                to={menu.path}
                isActive={(match, location) => {
                  // Check if the current location matches the menu's path or any of its subpaths
                  return (
                    match ||
                    location.pathname.startsWith(menu.path + "/") // Assuming child routes have paths like /homepage/institutes/child
                  );
                }}
                style={({ isActive }) => {
                  return isActive
                    ? {
                        backgroundColor: "#FF9800",
                        borderLeft: "6px solid white",
                      }
                    : {
                        color: "white",
                        borderLeft: "6px solid #105D50",
                      };
                }}
              >
                <div className="w-full flex flex-row p-3 gap-4 hover:bg-[#FF9800]">
                  <span className="text-xl text-white">{menu.icon}</span>
                  <h1
                    className={`${
                      open ? "text-[14px]" : "hidden"
                    } duration-500 text-white font-semibold`}
                  >
                    {menu.title}
                  </h1>
                </div>
              </NavLink>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;