import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./pages/Topbar/Topbar";
import Bottombar from "./pages/Bottombar/Bottombar";

import Dashboard from "./pages/Dashboard/Dashboard";
import CalendarPage from "./pages/Calendar/Calendar";
import MapPage from "./pages/Map/Map";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContainer>
          <TopBar />
          <MainpageContainer>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/map" element={<MapPage />} />
            </Routes>
          </MainpageContainer>
          <Bottombar />
        </AppContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  /* background-color: blue; */
  align-items: center;
`;

export const MainpageContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 50px;
  box-sizing: border-box;
  text-align: -webkit-center;
`;
