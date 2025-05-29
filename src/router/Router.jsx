import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../layouts/HomeLayout";
import ServicesLayout from "../layouts/ServicesLayout";
import ContactsLaytout from "../layouts/ContactsLaytout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Jobs from "../pages/Jobs/Jobs";
import JobDeatils from "../pages/Jobs/JobDeatils";
import PricingLayout from "../layouts/PricingLayout";
import Profile from "../Dashboard/Profile/Profile";




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
                path: "/pricing-plan",
                Component: PricingLayout,
            },
            {
                path: "/jobs",
                Component: Jobs,
            },
            {
                path: "/jobs/:id",
                Component: JobDeatils,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Register,
            },
            {
                path: "/profile",
                Component: Profile,
            },
        ]
    }
])
export default router;