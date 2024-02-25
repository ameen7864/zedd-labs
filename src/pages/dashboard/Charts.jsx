import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

const chartConfig = {
  type: "line",
  height: 430,
  series: [
    {
      name: "Sales",
      data: [0, 100, 140, 180, 220, 260, 320],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export default function Example() {
  const [chartData] = useState({
    series: [
      {
        name: "series1",
        data: [0, 100, 140, 180, 220, 260, 320],
      },
    ],
    options: {
      chart: {
        height: 400,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["gray"],
        width: 1,
        dashArray: 1,
        lineCap: "round",
        shadow: {
          enabled: true,
          color: "gray",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.4,
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-01T00:00:00.000Z",
          "2018-09-03T01:30:00.000Z",
          "2018-09-05T02:30:00.000Z",
          "2018-09-07T03:30:00.000Z",
          "2018-09-08T04:30:00.000Z",
          "2018-09-09T05:30:00.000Z",
          "2018-09-10T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div>
          <Typography variant="h6" color="blue-gray">
            Network
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={500}
        />
      </CardBody>
    </Card>
  );
}
