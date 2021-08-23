import React, { useState } from "react";

function Table(props) {
  const [timer, setTimer] = useState(Math.floor(Math.random() * 30) + 30);

  setTimeout(() => {
    setTimer(timer - 1);
  }, 1000);

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      {timer > 0 ? (
        <p style={{ textAlign: "left" }}>
          <strong>Time Left : {timer} </strong>
        </p>
      ) : (
        <p style={{ textAlign: "left", color: "orange" }}>
          <strong>Time is Up Please Refresh</strong>
        </p>
      )}

      <h2 style={{ textAlign: "left", color: "orange" }}>
        Claim your Free Trial Class
      </h2>
      <h3 style={{ textAlign: "left" }}>Class Schedule</h3>
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
              <td>
                <strong>{row.availability} </strong> Seats Available
              </td>
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
