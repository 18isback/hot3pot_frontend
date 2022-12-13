import React, { useEffect, useState } from "react";
import axios from "axios";

import { DashboardContainer, SearchArea, SearchBar } from "./Dashboard.element";
import "./Dashboard.custom.css";
// import { DummyList } from "../../dummy/dummy";

import { FaSearch } from "react-icons/fa";

import Card from "../../component/Card/Card";

const Dashboard = () => {
  const [searchvalue, setSearchValue] = useState("");
  const [Findlist, setFindList] = useState([]);
  const [DataList, setDataList] = useState([]);
  // api not working yet (CORS issue)
  useEffect(() => {
    axios
      .get("https://hot3pot-server-production.up.railway.app/places")
      .then((res) => {
        // console.log(res.data.reverse());
        // console.log(res.data);
        setDataList(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFindList([]);
    const tmp = DataList.filter((e) => e.place === searchvalue);
    setFindList(tmp);
  }, [searchvalue, DataList]);
  // console.log(Findlist);
  // console.log(DummyList);
  const SearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="Dashboard">
      <DashboardContainer>
        <SearchArea>
          <FaSearch />
          <SearchBar
            type="search"
            name="search"
            value={searchvalue}
            onChange={SearchChange}
          ></SearchBar>
        </SearchArea>
        {Findlist.length === 0
          ? DataList.map((data) => Card(data))
          : Findlist.map((data) => Card(data))}
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
