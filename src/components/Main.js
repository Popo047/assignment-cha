import React, { useState } from "react";
import Table from "./Table";

function Main() {
  const [data, setData] = useState([
    {
      id: 1,
      date: "Thu May 06 2021",
      time: "1PM IST - 2PM IST",
      availability: Math.floor(Math.random() * 15),
    },
    {
      id: 2,
      date: "Thu May 06 2021",
      time: "4PM IST - 5PM IST",
      availability: Math.floor(Math.random() * 15),
    },
  ]);

  const changeAvHandler = (id) => {
    const newData = data.map((row) => {
      if (row.id === id) {
        row.availability = row.availability - 1;
      }
      return row;
    });
    setData(newData);
  };

  return (
    <div>
      <Table rows={data} onchangeAv={changeAvHandler} />
    </div>
  );
}

export default Main;
