// Imports
import { Outlet } from "react-router"
import Navbar from "./navbar";
import { FiClock, FiHome } from "react-icons/fi";

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
                <div className={`max-w-[80%] mx-auto grid grid-cols-2 gap-3`}>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

// Export
export default LayoutPage;