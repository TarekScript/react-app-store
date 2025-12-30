import { createBrowserRouter } from "react-router";
import AppDetails from "../components/appDetails/AppDetails";
import Home from "../components/home/Home";
import RootPage from "../layout/RootPage";
import ErrorPage from "../pageses/ErrorPage";
import Loader from "../pageses/Loader";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootPage,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                loader: () => fetch('/data.json'),
                index: true,
                Component: Home,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                loader: () => fetch('/data.json'),
                path: '/appdetails/:id',
                Component: AppDetails,
                hydrateFallbackElement: <Loader></Loader>
            }
        ]
    },
]);
export default router