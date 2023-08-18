import React from "react";
import { Route, Routes } from "react-router";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { Materials } from "./courses-pages/Materials";
import Students from "./courses-pages/Students";
import { Ratings } from "./courses-pages/Ratings";

export const Courses = () => {
  return (
    <>
      <HeaderContainer>
        <StyledNav>
          <StyledNavLink to="/courses/materials">Materials</StyledNavLink>
          <StyledNavLink to="/courses/students">Students</StyledNavLink>
          <StyledNavLink to="/courses/ratings">Ratings</StyledNavLink>
        </StyledNav>
      </HeaderContainer>
      <MainContainer>
        <Routes>
          <Route path="/courses/materials" element={<Materials />} />
          <Route path="/courses/students" element={<Students />} />
          <Route path="/courses/ratings" element={<Ratings />} />
        </Routes>
      </MainContainer>
    </>
  );
};

const HeaderContainer = styled("header")`
  display: flex;
  padding-left: 2rem;
  align-items: center;
  gap: 50rem;
  width: 100%;
  height: 7rem;
  background-color: #2c87d9;
  & h1 {
    color: white;
    font-weight: 500;
  }
`;

const MainContainer = styled("main")`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 85vh;
`;

const StyledNav = styled("nav")`
  display: flex;
  gap: 3rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 1.9rem;
  font-weight: 500;
  text-decoration: none;
  &.active {
    border-bottom: 7px solid #f4c42d;
    color: #273947;
  }
`;
