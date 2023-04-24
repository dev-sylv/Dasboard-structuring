import React from "react";
import styled from "styled-components";

const DashboardSidebar = () => {
  return (
    <div>
      <Container>DashboardSidebar</Container>
    </div>
  );
};

export default DashboardSidebar;

const Container = styled.div`
  width: 250px;
  height: calc(100vh - 70px);
  background-color: chocolate;
`;
