// Imports
import { Outlet } from "react-router"
import Navbar from "./navbar";
import { FiClock, FiHome } from "react-icons/fi";

// My-Setup
const LayoutPage = () => {
    // Data Navbar
    const navbarData = [
        {path:"/" , label:"Home",Icon:FiHome},
        {path:"/history" , label:"History",Icon:FiClock}
    ]

    return (
        <>
            <Navbar data={navbarData} />
            <main className={`bg-gray-300 w-full min-h-screen`}>
                <Outlet />
            </main>
        </>
    )
}

// Export
export default LayoutPage;