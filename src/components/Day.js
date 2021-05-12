import React from "react";

const Day = ({ meteo }) => {
  const d = new Date(meteo.dt * 1000);
  const months = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];
  const year = d.getFullYear();
  const month = months[d.getMonth()];
  const day = d.getDate();
  var days = [
    "Domenica",
    "Lunedi",
    "Martedi",
    "Mercoledi",
    "Giovedi",
    "Venerdi",
    "Sabato",
  ];
  var dayOfWeek = days[d.getDay()];
  return (
    <>
      <div className="day">{`${day} ${month}`}</div>
      <div className="day">{dayOfWeek}</div>
      <div className={"day " + meteo.weather[0].main}></div>
      <div className="day"></div>
    </>
  );
};

export default Day;
