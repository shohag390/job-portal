import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../layouts/HomeLayout";
import ServicesLayout from "../layouts/ServicesLayout";
import ContactsLaytout from "../layouts/ContactsLaytout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";




const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: "/",
                Component: HomeLayout,
            },
            {
                path: "/services",
                Component: ServicesLayout,
            },
            {
                path: "/contacts",
                Component: ContactsLaytout,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Register,
            },
        ]
    }
])
export default router;