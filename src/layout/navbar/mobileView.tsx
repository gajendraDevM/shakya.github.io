import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {
    MdClose,
  MdColorLens,
  MdHome,
  MdModeEditOutline,
  MdOutlineMenu,
  MdVideoCameraBack,
} from 'react-icons/md';
import { PiFilmReelFill } from 'react-icons/pi';
import {
  RiContactsBookFill,
  RiFilmFill,
  RiUserSharedFill,
  RiInformationFill,
} from 'react-icons/ri';
import { FaChevronDown } from 'react-icons/fa';

export default function NavlinkComponent() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navData = [{
    label:"Home",
    path:"/",
    icon: MdHome
},

{
    label:"About",
    path:"/about",
    icon: RiInformationFill
},
{
    label:"Show Reels",
    path:"/show-reels",
    icon: PiFilmReelFill,
    children:[
        {
            label:"Vfx",
            path:"/vfx",
           icon: MdVideoCameraBack,

        },
        {
            label:"Editing",
            path:"/editing",
            icon: MdModeEditOutline,
        },
        {
            label:"Color_Grading",
            path:"/color-grading",
            icon: MdColorLens,
        },
    ]
},

{
    label:"Films",
    path:"/films",
    icon: RiFilmFill
},
{
    label:"Careers",
    path:"/careers",
    icon: RiUserSharedFill,
    children:[
        {
            label:"Jobs",
            path:"/jobs",
           icon: MdVideoCameraBack,

        },
        {
            label:"Courses",
            path:"/courses",
            icon: MdModeEditOutline,
        },
        {
            label:"Careers",
            path:"/careers",
            icon: MdColorLens,
        },
    ]
},
{
    label:"Contact",
    path:"/contact",
    icon: RiContactsBookFill
}

]
  return (
    <div className="relative p-1 ">
      <div className=' flex justify-between items-center px-2'>
    

      {!isMobileMenuOpen && <img src={logo} alt="" className='w-9'/>  } 
      <button
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2"
      >
       <MdOutlineMenu className=" text-3xl"/>
      </button>
</div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed z-30 h-screen top-0 left-0 w-64 bg-[#202020] shadow-md lg:hidden">
            <div className='p-4 '>
                {/* <div className='flex justify-between items-center mb-4'> */}
            <img src={logo} alt="" className='w-[130px]'/>   
            <MdClose className="text-2xl absolute right-4 top-4 "    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />
            {/* </div> */}
            <br/>
            <br/>
            <ul>
            {navData.map((item, i) => {
                const { icon: Iconcomponent } = item;

                return item.children ? (
                    <li key={i}>
                        <details className="text-[16px]">
                            <summary className="flex items-center space-x-2 p-2 ">
                                <Iconcomponent className="text-2xl text-white" />
                                <span>{item.label}</span>
                                <FaChevronDown className="text-white" />
                            </summary>
                            <ul className="p-2 space-y-2 bg-[#2e2e2e]">
                                {item.children.map((submenu, k) => {
                                    const { icon: IconSubComponent } = submenu;

                                    return (
                                        <li key={k}>
                                            <NavLink 
                                                to={submenu.path} 
                                                onClick={() => setMobileMenuOpen(false)} 
                                                className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-700"
                                            >
                                                <IconSubComponent className="text-xl  text-white" />
                                                <span>{submenu.label}</span>
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </details>
                    </li>
                ) : (
                    <li key={i}>
                        <NavLink
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className=" p-2 flex items-center space-x-2 hover:bg-[#2e2e2e]"
                        >
                            <Iconcomponent className="text-2xl text-white" />
                            <span>{item.label}</span>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
          </div>
        </div>
      )}

  
    </div>
  );
}
