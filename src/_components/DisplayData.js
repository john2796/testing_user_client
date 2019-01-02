import React from "react";

const DisplayData = ({ deleteHandler, data, index }) => (
  <ul onClick={deleteHandler}>
    <li>{data.firstName}</li>
    <li>{data.lastName}</li>
    <li>{data.username}</li>
    <li>{data.email}</li>
  </ul>
);

export default DisplayData;
