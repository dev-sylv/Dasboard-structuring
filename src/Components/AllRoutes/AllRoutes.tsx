import React from "react";
import { useRoutes } from "react-router-dom";
import DashboardScreen from "../Dashboard/DashboardScreen";

const AllRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <DashboardScreen />,
    },
  ]);
  return element;
};

export default AllRoutes;
