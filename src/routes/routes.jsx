import { createBrowserRouter } from "react-router";
import Hoom from "../layout/Hoom";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Hoom,
    },
]);
export default router