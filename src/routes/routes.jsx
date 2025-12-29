import { createBrowserRouter } from "react-router";
import Home from "../components/home/Home";
import RootPage from "../layout/RootPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootPage,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
]);
export default router