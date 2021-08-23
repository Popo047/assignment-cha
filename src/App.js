import "./App.css";
import React, { useState } from "react";

import Main from "./components/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
function App() {
  const [data, setData] = useState([
    {
      id: 1,
      date: "Thu May 06 2021",
      time: "1PM IST - 2PM IST",
      availability: Math.floor(Math.random() * 15),
      status: false,
    },
    {
      id: 2,
      date: "Fri May 07 2021",
      time: "4PM IST - 5PM IST",
      availability: Math.floor(Math.random() * 15),
      status: false,
    },
    {
      id: 3,
      date: "Mon May 09 2021",
      time: "4PM IST - 5PM IST",
      availability: Math.floor(Math.random() * 15),
      status: false,
    },
    {
      id: 4,
      date: "Tue May 10 2021",
      time: "4PM IST - 5PM IST",
      availability: Math.floor(Math.random() * 15),
      status: false,
    },
    {
      id: 5,
      date: "Wed May 11 2021",
      time: "4PM IST - 5PM IST",
      availability: Math.floor(Math.random() * 15),
      status: false,
    },
    {
      id: 6,
      date: "Thu May 12 2021",
      time: "4PM IST - 5PM IST",
      availability: Math.floor(Math.random() * 15),
      status: false,
    },
    {
      id: 7,
      date: "Fri May 13 2021",
      time: "4PM IST - 5PM IST",
      availability: Math.floor(Math.random() * 15),
      status: false,
    },
  ]);

  const changeAvHandler = (id) => {
    const newData = data.map((row) => {
      if (row.id === id) {
        row.availability = row.availability - 1;
        row.status = true;
      }
      return row;
    });
    setData(newData);
  };

  const cancelHandler = (id) => {
    const filteredData = data.filter((row) => row.id !== id);
    setData(filteredData);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Main rows={data} onchangeAv={changeAvHandler} />
          </Route>
          <Route path="/cart">
            <Cart rows={data} onChangeCart={cancelHandler} />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
