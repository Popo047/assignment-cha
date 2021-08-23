import React from "react";

function Cart(props) {
  console.log(props.rows);
  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Availability</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Cart;
