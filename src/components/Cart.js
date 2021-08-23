import React from "react";

function Cart(props) {
  console.log(props.rows);
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Availability</th>
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row) =>
            row.status ? (
              <tr key={row.id}>
                <th scope="row">{row.id}</th>
                <td>{row.date}</td>
                <td>{row.time}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => props.onChangeCart(row.id)}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
