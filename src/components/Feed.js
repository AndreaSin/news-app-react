import React from "react";
import { useState, useEffect } from "react";
import { properties } from "../properties.js";
import WeekBlock from "./WeekBlock";

const Feed = () => {
  const [meteo, setMeteo] = useState();
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    const cord = await getLatLon();
    const res = await fetch(properties.urlBuilder(cord[0], cord[1]));
    const data = await res.json();
    return data;
  };

  const getLatLon = async () => {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve([position.coords.latitude, position.coords.longitude]);
      });
    });
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setMeteo(data);
    };
    getData();
  }, []);

  return (
    <div className="background">
      {meteo ? <WeekBlock meteo={meteo.daily} /> : <></>}
    </div>
  );
};

export default Feed;
