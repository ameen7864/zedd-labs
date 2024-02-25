import { Card, CardBody, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

export function StatisticsCard({ color, icon, title, value, titles }) {
  return (
    <Card className={`border-0 w-64  shadow-sm`} style={{ background: color }}>
      <CardBody className="p-4 ">
        <Typography variant="h4" color="blue-gray">
          {value}
        </Typography>
        <Typography
          variant="meduim"
          className="font-semibold  capitalize text-blue-gray-600"
        >
          {title}
        </Typography>
        <Typography
          variant="meduim"
          className="font-semibold  capitalize text-blue-gray-600"
        >
          {titles}
        </Typography>
      </CardBody>
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
