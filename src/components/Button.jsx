import React from "react";
import { styled } from "styled-components";

const Button = ({ children }) => {
  return <StyledButon>{children}</StyledButon>;
};

export default Button;

const StyledButon = styled("button")`
    width: auto;
    height: auto;
    background-color: #14AE9E;
    padding: 15px 3.8rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 40px;
    cursor: pointer;
`;
