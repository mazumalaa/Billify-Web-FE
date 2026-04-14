// Imports
import { Outlet } from "react-router"
import Navbar from "./navbar";
import { FiClock, FiHome } from "react-icons/fi";
import CustomFooter from "./customFooter";

// My-Setup
const LayoutPage = () => {
    // Data Navbar
    const navbarData = [
        { path: "/", label: "Home", Icon: FiHome },
        { path: "/history", label: "History", Icon: FiClock }
    ]

    return (
        <>
            <Navbar data={navbarData} />
            <main className={`bg-gray-300 w-full min-h-screen py-20`}>
                <div className={` max-w-[95%] lg:max-w-[85%] columns-1 md:columns-2 mx-auto `}>
                    <Outlet />
                </div>
            </main>
            <CustomFooter />
        </>
    )
}

// Export
export default LayoutPage;