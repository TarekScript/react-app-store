import { createBrowserRouter } from "react-router";
import AppDetails from "../components/appDetails/AppDetails";
import Home from "../components/home/Home";
import Login from "../components/loginPage/Login";
import Register from "../components/registerPage/Register";
import RootPage from "../layout/RootPage";
import ErrorPage from "../pageses/ErrorPage";
import Loader from "../pageses/Loader";
import PrivateRoute from "./PrivateRoute";

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
                element: <PrivateRoute><AppDetails></AppDetails></PrivateRoute>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    },
]);
export default router