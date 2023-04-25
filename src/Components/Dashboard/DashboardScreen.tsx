import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardBody from "./DashboardBody";
import styled from "styled-components";

const DashboardScreen = () => {
  return (
    <div>
      <DashboardHeader />
      <Div>
        <DashboardSidebar />
        <DashboardBody />
      </Div>
    </div>
  );
};

// dashboard

export default DashboardScreen;

const Div = styled.div`
  display: flex;
`;
