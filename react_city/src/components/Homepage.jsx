import React from "react";
import react, { useEffect, useState } from "react";
import axios from "axios";
import { getAccordionDetailsUtilityClass } from "@mui/material";

export default function Homepage() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    getAccordionDetailsUtilityClass();
  }, []);

  const getData = async (data) => {
    const res = await axios.get("http://localhost:3001/cities");
    setCity(res.data[0]);
  };

  return (
    <div>
      <h1>Home</h1>
      <table border="1px solid black">
        <thead>
          <tr>
            <td>id</td>
            <td>Country</td>
            <td>City</td>
            <td>Population</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          <td>{city.id}</td>
          <td>{city.country}</td>
          <td>{city.city_name}</td>
          <td>{city.population}</td>
          <td>Edit</td>
          <td>Delete</td>
        </tbody>
      </table>
    </div>
  );
}
