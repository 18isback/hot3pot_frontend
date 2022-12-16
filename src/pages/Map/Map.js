/* global kakao */
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import axios from "axios";

import { MapContainer, MapPageContainer } from "./Map.element";
import "./Map.custom.css";
import Card from "../../component/Card/Card";

// import { DummyList } from "../../dummy/dummy";

const MapPage = () => {
  const [mapPin, setMapPin] = useState([]);
  const [DataList, setDataList] = useState([]);
  const [FilterList, setFilterList] = useState([]);
  useEffect(() => {
    setMapPin([]);
    axios
      .get("https://hot3pot-server-production.up.railway.app/places")
      .then((res) => {
        // console.log(res.data);
        setDataList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    DataList.map((data) => {
      // console.log(data);
      return getAddress(data);
    });
  }, [DataList]);

  const getAddress = (data) => {
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        // console.log(data.id);
        // console.log(new kakao.maps.LatLng(result[0].x, result[0].y));
        setMapPin((mapPin) => [
          ...mapPin,
          [new kakao.maps.LatLng(result[0].x, result[0].y), data.address],
        ]);
      } else {
        console.log(status, result);
      }
    });
  };

  const onMarkerPress = (data) => {
    console.log(data);
    setFilterList(
      DataList.filter((item) => item.address === data[1]).reverse()
    );
  };

  const MarkonMap = (data) => {
    // console.log(data[0]);
    return (
      <MapMarker
        clickable={true}
        position={{ lat: data[0].La, lng: data[0].Ma }}
        onClick={() => onMarkerPress(data)}
      ></MapMarker>
    );
  };

  // console.log(mapPin);
  return (
    <MapPageContainer className="Map">
      <div style={{ marginBottom: "12px" }}>
        Click the pin to see place in 3d!
      </div>
      <MapContainer>
        <Map
          center={{ lat: 36.2683, lng: 127.6358 }}
          style={{ width: "100%", height: "100%" }}
          level={14}
          scrollwheel={true}
        >
          {mapPin.map((data, index) => {
            return MarkonMap(data);
          })}
          {/* <MapMarker position={{ lat: 37.55635, lng: 126.795841 }}></MapMarker>
          <MapMarker position={{ lat: 35.55635, lng: 129.095841 }}></MapMarker> */}
        </Map>
      </MapContainer>
      {FilterList.length === 0 ? <></> : FilterList.map((data) => Card(data))}
    </MapPageContainer>
  );
};

export default MapPage;
