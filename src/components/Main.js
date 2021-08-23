import React, { useState } from "react";
import Table from "./Table";

function Main(props) {
  return (
    <div>
      <Table rows={props.rows} onchangeAv={props.onchangeAv} />
    </div>
  );
}

export default Main;
