import React from "react";
import SelectComponent from "./Select";

export default {
  title: "Select",
  component: SelectComponent,
};

const options = [
  { value: "Los Angeles", title: "Los Angeles" },
  { value: "San Francisco", title: "San Francisco" },
  { value: "New York", title: "New York" },
];

export const Main = () => <SelectComponent options={options} />;
