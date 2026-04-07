// Imports
import { Outlet } from "react-router"
import Navbar from "./navbar";

// My-Setup
const LayoutPage = () => {
    // Data Navbar
    const navbarData = [
        {path:"/" , label:"Home"},
        {path:"/history" , label:"History"}
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