import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import Navbar from "./navbar";
import MobileNavBar from "./navbar/mobileView";

export default function Layout() {
  return (
    <main className="h-screen overflow-y-auto overflow-x-hidden relative">

    <div className=" hidden lg:block">
    <Navbar/>
      </div>
      <div className="  lg:hidden">
    <MobileNavBar/>
      </div>
{/* <br/><br/> */}
<Outlet/>
   
<Footer/>
    </main>
  )
}
