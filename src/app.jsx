// Imports
import { RouterProvider } from "react-router/dom";
import router from "./routes/routes"
import "./styles/main.css"
import "./styles/animate.css"

// My-Setup
const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

// Export
export default App;