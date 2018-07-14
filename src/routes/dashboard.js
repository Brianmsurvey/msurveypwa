import Dashboard from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import Audience from "../views/Audience/Audience2";

const dashboardRoutes = [
  /* Side Navbar Links */
  {
    toShow: true,
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    toShow: true,
    path: "/audience",
    name: "Audience",
    component: Audience
  },
  {
    toShow: false,
    path: "/user/:id",
    name: "User Profile",
    component: UserProfile
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
