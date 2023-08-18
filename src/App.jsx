import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import "./App.css";
import { Courses } from "./pages/Courses";
import { Anouncements } from "./pages/Anouncements";
import { Notifications } from "./pages/Notifications";
import { Schedule } from "./pages/Schedule";

function App() {
  return (
    <Container>
      <MenuContainer>
        <LogoTitle>LOGO</LogoTitle>
        <StyledNav>
          <StyledNavLink to="/courses">Courses</StyledNavLink>
          <StyledNavLink to="/anouncements">Anouncements</StyledNavLink>
          <StyledNavLink to="/notifications">Notifications</StyledNavLink>
          <StyledNavLink to="/schedule">Schedule</StyledNavLink>
        </StyledNav>
      </MenuContainer>
      <MainContainer>
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/courses/*" element={<Courses />} />
          <Route path="/anouncements" element={<Anouncements />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </MainContainer>
    </Container>
  );
}

export default App;

const MainContainer = styled("div")`
  width: 100%;
  height: 100vh;
`;

const StyledNav = styled("nav")`
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
`;

const StyledNavLink = styled(NavLink)`
  height: 2.8rem;
  color: #3186dd;
  font-size: 1.6rem;
  font-weight: 500;
  padding-left: 1rem;
  text-decoration: none;
  &.active {
    color: #283844;
    background-color: #e3cff2;
  }
`;

const Container = styled("div")`
  display: flex;
`;

const MenuContainer = styled("div")`
  width: 18%;
  height: 100vh;
  background-color: #c2cfd9;
`;

const LogoTitle = styled("h1")`
  color: #7113c6;
  text-align: center;
  margin-right: 3rem;
  padding-top: 4rem;
`;
