import React from "react";
import Select, { Option } from "rc-select";
import "./Styles.scss";
import "rc-select/assets/index.less";
interface Option {
  value: string;
  title: string;
}

interface Props {
  options: Option[];
}

const SelectComponent = (props: Props) => {
  const { options } = props;

  return (
    <Select>
      {options.map((item) => (
        <Option value={item.value}>{item.title}</Option>
      ))}
    </Select>
  );
};

export default SelectComponent;
