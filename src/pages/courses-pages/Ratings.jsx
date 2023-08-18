import React from "react";
import { styled } from "styled-components";

export const Ratings = () => {
  return (
    <RatingsContainer>
      <h1>Ratings Page</h1>
    </RatingsContainer>
  );
};

const RatingsContainer = styled("div")`
  width: 80%;
  height: 80px;
  background-color: aqua;
`;
