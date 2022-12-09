import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import axios from "axios";

import { CalendarContainer } from "./Calendar.element";
import "react-calendar/dist/Calendar.css";
import "./Calendar.custom.css";

// import { DummyList } from "../../dummy/dummy";
import Card from "../../component/Card/Card";

const CalendarPage = () => {
  const [date, onChangeDate] = useState(new Date());

  const [DataList, setDataList] = useState([]);
  useEffect(() => {
    axios
      .get("https://hot3pot-server-production.up.railway.app/places")
      .then((res) => {
        console.log(res.data);
        setDataList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickDay = (e) => {
    // console.log(e);
    var today = new Date();

    if (new Date(e.toDateString()) <= today) {
      onChangeDate(e);
    }
  };

  const DatePicker = () => {
    var tmp = date.toDateString();
    // DummyList.map((data, index) => console.log(new Date(data.day)));
    console.log(tmp);

    var found = DataList.find((e) => new Date(e.day).toDateString() === tmp);
    console.log(found);
    return (
      <>
        {found !== undefined ? Card(found) : <div>해당 일에는 없어요 ㅠㅠ</div>}
      </>
    );
  };

  return (
    <>
      <CalendarContainer className="CalendarPage">
        <div style={{ marginBottom: "12px" }}>
          Pick a date and see the day's place in 3D!{" "}
        </div>
        <Calendar
          // onClickDay={alert("asdf", date)}
          onClickDay={onClickDay}
          value={date}
          calendarType={"US"}
          formatDay={(locale, date) => moment(date).format("DD")}
          minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
          // maxDate={new Date()}
        />
        {/* <div>{moment(date).format("YYYY년 MM월 DD일")}</div> */}
        <div style={{ marginBottom: "12px" }}></div>
        <DatePicker />
      </CalendarContainer>
    </>
  );
};

export default CalendarPage;
