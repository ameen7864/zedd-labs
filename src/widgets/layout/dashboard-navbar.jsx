import { setOpenSidenav, useMaterialTailwindController } from "@/context";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Breadcrumbs,
  IconButton,
  Navbar,
  Option,
  Select,
} from "@material-tailwind/react";
import { FaBell } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <Navbar
      className={`rounded-xl transition-all bg-white `}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize flex">
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden "
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <div className="">
              <div className="w-24">
                <select name="" id="" className="bg-transparent px-3 font-bold">
                  <option value="">Default Project</option>
                </select>
              </div>
            </div>
          </Breadcrumbs>
        </div>
        <div className="flex items-center">
          <div className="flex gap-6">
            <IoGiftOutline size={30} color="red" />
            <FaBell size={24} color="black" className="mt-1 mr-3" />
          </div>
          <div className="mr-auto flex justify-center items-center  ">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
            />

            <div className=" ml-2 ">
              <select
                name=""
                id=""
                className="bg-transparent text-black px-3 font-bold"
              >
                <option value="">Daren Joe</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
