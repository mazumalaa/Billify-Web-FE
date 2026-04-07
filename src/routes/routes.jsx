// Imports
import { createBrowserRouter } from "react-router";
import LayoutPage from "../components/layout";
import HomePage from "../pages/homePage";
import HistoryPage from "../pages/historyPage";

// My-Setup
const router = createBrowserRouter([
    {
        path:"/",
        element:<LayoutPage />,
        children:[
            {
                index:true,
                element:<HomePage />
            },
            {
                path:"history",
                element:<HistoryPage />
            }
        ]
    }
])

// Export
export default router;