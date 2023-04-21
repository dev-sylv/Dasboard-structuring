import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardBody from "./DashboardBody";

const DashboardScreen = () => {
  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <DashboardBody />
    </div>
  );
};

export default DashboardScreen;
