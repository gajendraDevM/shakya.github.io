import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import {MdColorLens, MdHome, MdModeEditOutline, MdVideoCameraBack} from 'react-icons/md'
import {PiFilmReelFill} from 'react-icons/pi'
// import {IoMdColorPalette} from 'react-icons/io'
import {RiContactsBookFill, RiFilmFill, RiUserSharedFill, RiInformationFill} from 'react-icons/ri'


export default function NavlinkComponent() {
    
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
        logo:logo,
         path:"/home"
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
        
                <div className="navbar-center hidden lg:flex  ">
                  <ul className="menu menu-horizontal items-end px-1 text-white gap-x-12">

                    {
                        navData?.map((item, i)=>{

                            const {icon:Iconcomponent} = item

                            return  item?.children ? 
                            
                             <li tabIndex={0} key={i}>
                      <details className='text-[16px]'>
                      <summary>
                     
                                <Iconcomponent className="text-2xl"/>{item.label} </summary>
                        <ul className="p-2 ">

                            {
                                item.children?.map((submenu, k)=>{

                                    const {icon:IconSubComponent} = submenu



                                    return <li key={k}><NavLink to={submenu.path}>
                                         <div className='flex items-end justify-center gap-x-2 text-[16px]' >
                                            <IconSubComponent className="text-[18px]"/>{submenu.label} 
                                         </div>
                                       
                                        </NavLink></li>
                     
                                 
                                })
                            }
                        
                        </ul>
                      </details>
                    </li>
                            
                            :<li><NavLink
                            className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                          }
                            to={item.path}>{item.logo? <div className='flex flex-col  justify-center items-center'><img src={item.logo} alt="" className='w-28'/>
                            <h2 className='uppercase  text-md mt-1 tracking-widest '>Shakya Studio</h2>
                            </div>  :
                            <div className='flex  gap-x-2 items-end justify-center text-[16px]' >
                                <Iconcomponent className="text-2xl"/>{item.label}</div>} </NavLink></li>
                        })
                    }
                 
                  </ul>
                </div>
               
             
         
  )
}
