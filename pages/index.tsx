import React from "react";
import SelectComponent from "../src/Components/Select/Select";

export default function MyApp() {
  const options = [
    { value: "Los Angeles", title: "Los Angeles" },
    { value: "San Francisco", title: "San Francisco" },
    { value: "New York", title: "New York" },
  ];

  return (
    <div>
      <SelectComponent options={options} />
    </div>
  );
}
