import React from "react";
import styled from "styled-components";

const DashboardBody = () => {
  return (
    <div>
      <Container>DashboardBody</Container>
    </div>
  );
};

export default DashboardBody;

const Container = styled.div`
  width: calc(100% - 250px);
  background-color: #64a05f;
  height: calc(100% - 70px);
`;
