import React from "react";
import { styled } from "styled-components";

export const Notifications = () => {
  return (
    <Container>
      <h1>No notifications at the moment</h1>    </Container>
  );
};

const Container = styled("div")`
  width: 96%;
  height: 94%;
  margin: 1.5rem;
  background-color: white;
  & h1 {
    font-weight: 600;
    padding: 1.5rem 1rem;
  }
`;
