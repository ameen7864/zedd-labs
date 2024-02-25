import { AiOutlineLike } from "react-icons/ai";
import { FaRegImage } from "react-icons/fa";
import { FaBible } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

export const runningdata = [
  {
    img: <FaRegImage className="text-black" size={24} />,
    name: "Rendering Jobs",
    count: 14,
  },
  {
    img: <FaBible className="text-black" size={24} />,
    name: "Waiting Jobs",
    count: 14,
  },
  {
    img: <AiOutlineLike className="text-black" size={24} />,
    name: "Completed Jobs",
    count: 14,
  },
  {
    img: <IoWarningOutline className="text-black" size={24} />,
    name: "Failed Jobs",
    count: 14,
  },
];
