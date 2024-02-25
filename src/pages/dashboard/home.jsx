import { Button, Card, CardBody } from "@material-tailwind/react";
import { Table, Tag } from "antd";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import Example from "./Charts";
import Chart from "react-apexcharts";

export function Home() {
  const { t } = useTranslation();
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

  const options = {
    title: "",
    legend: "none",
    sliceVisibilityThreshold: 0.2,
  };

  const column = [
    {
      title: "Vendor name ",
      dataIndex: "name",
    },
    {
      title: "Categories",
      dataIndex: "category",
    },
    {
      title: "Subcategories",
      dataIndex: "subcategory",
    },
    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Mo.no",
      dataIndex: "mobile",
    },
    {
      title: "Date of registration",
      dataIndex: "reister",
    },
    {
      title: "Date of Accept",
      dataIndex: "accept",
      render: (accept) => <div className="text-blue-500">{accept}</div>,
    },
    {
      title: "Date of expiry",
      dataIndex: "expiry",
      render: (expiry) => <div className="text-red-500">{expiry}</div>,
    },
    {
      title: "Status",
      dataIndex: "active",
      render: (active) => (
        <div>{active ? <Tag color={"green"}>Active</Tag> : active}</div>
      ),
    },
  ];
  const datas = [];
  for (let i = 0; i < 46; i++) {
    datas.push({
      key: i,
      name: `Edward King ${i}`,
      category: "Design",
      subcategory: "Fencing",
      email: "Abdullah@123.com",
      mobile: "+965 4897566123",
      reister: "12-04-2023",
      accept: "12-04-2023",
      expiry: "12-04-2023",
      active: "active",
      address: `London, Park Lane no. ${i}`,
    });
  }
  const pieParams = { height: 200, margin: { right: 5 } };
  const palette = ["red", "blue", "green"];

  return (
    <>
      <div className="mb-4 grid grid-cols-1 xl:grid-cols-4 gap-4">
        <div className="col-span-3 pr-4">
          <Card className="w-full overflow-auto mr-2 rounded-2xl border border-blue-gray-00 mt-6">
            <CardBody className="p-4 h-auto">
              <div className="flex justify-between items-center mb-4 font-bold">
                {" "}
                <div>Running jobs</div>
                <div className="flex">
                  This Week{" "}
                  <MdOutlineArrowDropDown className="-mt-1 mx-2" size={28} />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item, index) => (
                  <>
                    <Card className=" w-full overflow-auto mr-2 rounded-2xl border border-blue-gray-00 mt-6">
                      <CardBody className="p-4 h-auto">
                        <div key={index} className="col-span-1 mx-2">
                          <div className="flex   mx-4 my-2 ">
                            <AiFillLike size={30} color="skyblue" />
                          </div>
                          <div className="mx-2 my-2 text-xl capitalize">
                            render
                          </div>
                          <div className="mx-2 font-bold text-2xl">14</div>
                        </div>
                      </CardBody>
                    </Card>
                  </>
                ))}
              </div>
            </CardBody>
          </Card>
          <Card className="w-full overflow-auto mr-2 rounded-2xl border border-blue-gray-00 mt-6">
            <CardBody className="p-4 h-auto">
              <div className="flex justify-between items-center mb-4 font-bold">
                {" "}
                <div>Running jobs</div>
                <div className="flex">
                  This Week{" "}
                  <MdOutlineArrowDropDown className="-mt-1 mx-2" size={28} />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item, index) => (
                  <>
                    <Card className=" w-full overflow-auto mr-2 rounded-2xl border border-blue-gray-00 mt-6">
                      <CardBody className="p-4 h-auto">
                        <div key={index} className="col-span-1 mx-2">
                          <div className="flex   mx-4 my-2 ">
                            <AiFillLike size={30} color="skyblue" />
                          </div>
                          <div className="mx-2 my-2 text-xl capitalize">
                            render
                          </div>
                          <div className="mx-2 font-bold text-2xl">14</div>
                        </div>
                      </CardBody>
                    </Card>
                  </>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="col-span-1 my-6 ">
          {/* <Card className=" w-full overflow-scroll mr-2 rounded-2xl border border-blue-gray-00 mt-6">
            <CardBody className="p-4 h-auto">
              <Table columns={column} dataSource={datas} />
            </CardBody>
          </Card> */}

          <Example />
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 xl:grid-cols-4 gap-4">
        <div className="col-span-3 pr-4">
          <Card className="w-full overflow-scroll mr-2 rounded-2xl border border-blue-gray-00 mt-6">
            <CardBody className="p-4 h-auto">
              {/* Content for the left side, such as a table */}
              <Table columns={column} dataSource={datas} />
            </CardBody>
          </Card>
        </div>
        <div className="col-span-1 flex justify-between h-[330px]">
          <Card className="w-1/2 overflow-hidden rounded-2xl border border-blue-gray-00 mt-6 mr-2">
            <div className="m-5">
              <div className="text-xl font-bold my-4"> Balance</div>
              <div className="text-2xl font-bold my-2">$458</div>
              <div className="flex justify-between">
                <div>
                  <div>Coupon</div>
                  <div>$25</div>
                </div>
                <div className="border-l border-gray-300 pl-4">
                  <div>Coupon</div>
                  <div>$25</div>
                </div>
              </div>

              <div className="text-xs text-gray-700 my-4">
                Hours Remaining <span>20:59:59</span>
              </div>
              <Button variant="outlined" className="rounded-full">
                Reacharge Now
              </Button>
            </div>
          </Card>
          <Card className="w-1/2 overflow-hidden rounded-2xl border border-blue-gray-00 mt-6 mr-2">
            <Chart
              options={options22}
              series={options22.series}
              type="line"
              height={350}
            />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
