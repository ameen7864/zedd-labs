import { Button, Card, CardBody } from "@material-tailwind/react";
import { Table } from "antd";
import render from "../../assests/data.png";

import { IoEyeOutline } from "react-icons/io5";
import { runningdata } from "../Data";
import Example from "./Charts";

export function Home() {
  const today = new Date().toISOString().split("T")[0];
  const data = [
    ["Pizza", "Popularity"],
    ["Pepperoni", 25],
    ["Hawaiian", 45],
    ["Mushroom", 30],
  ];

  const options22 = {
    chart: {
      type: "line",
    },
    series: [
      {
        name: "Sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };

  const column = [
    {
      title: "Job Id",
      dataIndex: "name",
    },
    {
      title: "Project id",
      dataIndex: "category",
    },
    {
      title: "Stage",
      dataIndex: "subcategory",
    },
    {
      title: "Scene /shot  name",
      dataIndex: "email",
    },

    {
      title: "View",
      dataIndex: "view",
    },
  ];
  const datas = [];
  for (let i = 0; i < 6; i++) {
    datas.push({
      key: i,
      name: `1234567890`,
      category: "Pro_256",
      subcategory: "Rendering",
      email: "KD1_00123_DPI_JK001_light...",
      view: <IoEyeOutline color="blue" size={24} />,
    });
  }

  return (
    <>
      <div className="mb-4 grid grid-cols-1 xl:grid-cols-4 gap-4">
        <div className="col-span-3 pr-4">
          <Card className="w-full overflow-auto mr-2 rounded-2xl border border-blue-gray-00 mt-6">
            <CardBody className="p-4 h-auto">
              <div className="flex justify-between items-center mb-4 font-bold">
                {" "}
                <div className="font-bold text-xl text-black">Running jobs</div>
                <div className="flex text-black">
                  <select name="" id="">
                    <option value="">This week</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {runningdata.map((data, i) => (
                  <div key={data} className="col-span-1 my-2">
                    <div className="border  rounded-full w-11 bg-[#E6F1FF] p-2">
                      {/* <img src={render} alt="" /> */}
                      {data.img}
                    </div>
                    <div className="mx-1 my-6 text-xl text-gray-500 uppercase">
                      {data?.name}
                    </div>
                    <div className="mx-2 font-bold text-3xl mb-2 text-black">
                      {data?.count}
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
          <Card className="w-full overflow-auto mr-2 rounded-2xl border border-blue-gray-00 mt-6">
            <CardBody className="p-4 h-auto">
              <div className="flex justify-between items-center mb-4 font-bold">
                {" "}
                <div className="font-bold text-xl text-black">
                  Running Frames
                </div>
                <div className="flex text-black">
                  <select name="" id="">
                    <option value="">This week</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {runningdata.map((data, i) => (
                  <div key={data} className="col-span-1 my-2">
                    <div className="border  rounded-full w-11 bg-[#E6F1FF] p-2">
                      {/* <img src={render} alt="" /> */}
                      {data.img}
                    </div>
                    <div className="mx-1 my-6 text-xl text-gray-500 uppercase">
                      {data?.name}
                    </div>
                    <div className="mx-2 font-bold text-3xl mb-2 text-black">
                      {data?.count}
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-1 my-6 ">
          <Example />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        <div className="col-span-3 pr-4">
          <Card className="w-full mr-2 overflow-auto rounded-2xl border border-blue-gray-00 -mt-6">
            <CardBody className="p-4 h-auto">
              <div className="font-bold text-xl text-black mb-6 my-3 mx-3">
                Active Jobs
              </div>
              <Table columns={column} dataSource={datas} />
            </CardBody>
          </Card>
        </div>
        <div className="md:col-span-1 flex flex-col lg:flex-row gap-2 md:h-[360px]">
          <Card className="w-full lg:w-1/2 overflow-hidden rounded-2xl border border-blue-gray-00 mt-6 md:mr-2">
            <div className="m-5">
              <div className="text-xl font-bold my-1 mb-5 text-black">
                {" "}
                Balance
              </div>
              <div className="text-2xl font-bold my-2 text-black">
                <span>$</span>458
              </div>
              <div className="flex justify-between my-6">
                <div>
                  <div>Coupon</div>
                  <div className="text-black text-xl font-bold">$25</div>
                </div>
                <div className="border-l border-gray-300 pl-4">
                  <div>Credits</div>
                  <div className="text-black text-xl font-bold">$0</div>
                </div>
              </div>

              <div className="text-xs text-gray-700 my-4">
                Hours Remaining{" "}
                <span className="text-bold text-black">20:59:59</span>
              </div>
              <Button
                variant="outlined"
                className="rounded-full border-[#0171FE] text-[#0171FE]"
              >
                Reacharge Now
              </Button>
            </div>
          </Card>
          <Card className="w-full lg:w-1/2 overflow-hidden rounded-2xl border border-blue-gray-00 mt-6 md:mr-2">
            <div className="m-5">
              <div className="text-xl font-bold my-1 mb-5 text-black">
                {" "}
                Storage
              </div>
              <img src={render} alt="" />

              <div className="text-xs text-gray-700 my-4">
                Hours Remaining{" "}
                <span className="text-bold text-black">20:59:59</span>
              </div>
              <Button
                variant="outlined"
                className="rounded-full border-[#0171FE] text-[#0171FE]"
              >
                View Details
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
