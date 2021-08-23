import React, { useState } from "react";

function Table(props) {
  const [timer, setTimer] = useState(Math.floor(Math.random() * 30) + 30);

  setTimeout(() => {
    setTimer(timer - 1);
  }, 1000);

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      {timer > 0 ? (
        <p>Time Left : {timer} </p>
      ) : (
        <p>Time is Up Please Refresh</p>
      )}

      <h1>Claim your seats</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Availability</th>
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row) => (
            <tr>
              <th scope="row">{row.id}</th>
              <td>{row.date}</td>
              <td>{row.time}</td>
              <td>{row.availability}</td>
              <td>
                {row.availability > 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => props.onchangeAv(row.id)}
                  >
                    Book Now
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="btn btn-primary"
                    onClick={() => props.onchangeAv(row.id)}
                  >
                    Full
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
