import React from "react";
import Day from "./Day";

const WeekBlock = ({ meteo }) => {
  return (
    <div className="week-block">
      {meteo.map((meteo4day, i) => {
        return <Day className="ads" key={i} meteo={meteo4day} />;
      })}
    </div>
  );
};

export default WeekBlock;
