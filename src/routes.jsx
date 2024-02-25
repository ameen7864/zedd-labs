import { Home } from "@/pages/dashboard";
import Assests from "./pages/Assests/Assests";
import { RxDashboard } from "react-icons/rx";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <RxDashboard />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <RxDashboard />,
        name: "assests",
        path: "/assests",
        element: <Assests />,
      },
      {
        icon: <RxDashboard />,
        name: "analysis",
        path: "/assests",
        element: <Assests />,
      },
      {
        icon: <RxDashboard />,
        name: "jobs",
        path: "/assests",
        element: <Assests />,
      },
      {
        icon: <RxDashboard />,
        name: "reports",
        path: "/assests",
        element: <Assests />,
      },
      {
        icon: <RxDashboard />,
        name: "reports",
        path: "/assests",
        element: <Assests />,
      },
    ],
  },
];

export default routes;
