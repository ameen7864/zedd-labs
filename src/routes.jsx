import { Home } from "@/pages/dashboard";
import Assests from "./pages/Assests/Assests";
import { RxDashboard } from "react-icons/rx";
import { BiSolidReport, BiSupport, BiTransferAlt } from "react-icons/bi";
import {
  MdAnalytics,
  MdOutlineChangeCircle,
  MdOutlineDriveFolderUpload,
  MdOutlineFeedback,
} from "react-icons/md";
import Analysis from "./pages/Analysis/Analysis";
import Jobs from "./pages/Jobs/Jobs";
import Reports from "./pages/Reports/Reports";
import Transfer from "./pages/Transfer/Transfer";
import { IoSettingsOutline } from "react-icons/io5";
import { LuTicket } from "react-icons/lu";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <RxDashboard size={24} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <MdOutlineDriveFolderUpload size={24} />,
        name: "assests",
        path: "/assests",
        element: <Assests />,
      },
      {
        icon: <MdAnalytics size={24} />,
        name: "analysis",
        path: "/analysis",
        element: <Analysis />,
      },
      {
        icon: <MdOutlineChangeCircle size={24} />,
        name: "jobs",
        path: "/jobs",
        element: <Jobs />,
      },
      {
        icon: <BiSolidReport size={24} />,
        name: "reports",
        path: "/report",
        element: <Reports />,
      },
      {
        icon: <BiTransferAlt size={24} />,
        name: "transfers",
        path: "/transfer",
        element: <Transfer />,
      },
    ],
  },
  {
    title: <hr className="bg-gray-500 mb-[250px]" />,
    layout: "auth",
    pages: [
      {
        icon: <RxDashboard size={24} />,
        name: "project",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <IoSettingsOutline size={24} />,
        name: "settings",
        path: "/assests",
        element: <Assests />,
      },
      {
        icon: <BiSupport size={24} />,
        name: "support",
        path: "/assests",
        element: <Assests />,
      },
      {
        icon: <MdOutlineFeedback size={24} />,
        name: "feedback",
        path: "/assests",
        element: <Assests />,
      },
      {
        icon: <LuTicket size={24} />,
        name: "raise ticket",
        path: "/assests",
        element: <Assests />,
      },
    ],
  },
];

export default routes;
