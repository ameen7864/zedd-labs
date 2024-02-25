import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setOpenSidenav, useMaterialTailwindController } from "@/context";
import { t } from "i18next";
import { useState } from "react";
import { AiFillPieChart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";

export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, openSidenav } = controller;
  const sidenavType = "dark";
  const sales = localStorage.getItem("sales");
  const navigate = useNavigate();

  const handlelogout = () => {
    navigate(`/auth/sign-in`);
    localStorage.clear();
  };

  const sidenavTypes = {
    dark: "bg-red-500",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={4}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-3 w-3   transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  return (
    <aside
      className={`${"bg-[#011627] shadow-lg"} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } custom-scrollbar fixed inset-0 z-50  h-[calc(100vh)] w-72 overflow-hidden rounded-e-[50px] transition-transform duration-300 hover:overflow-y-auto xl:translate-x-0`}
    >
      <div className="relative mt-10">
        <div className="flex justify-end relative top-2 right-3">
          {" "}
          <XMarkIcon
            strokeWidth={2}
            className="h-6 w-6 xl:hidden cursor-pointer"
          />
        </div>
        <Link to="/">
          <div className="flex my-6 px-9" />
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>

      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      style={{
                        background: isActive ? "#5F8AD3" : "#011627",
                        boxShadow: "none",
                      }}
                      variant={isActive ? "gradient" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                          ? "white"
                          : "blue-gray"
                      }
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      {icon}
                      <Typography color="inherit" className=" capitalize">
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Admin Dashboard",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
