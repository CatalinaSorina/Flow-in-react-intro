import React, { useState } from "react";
import "./CheckFlowTypes.css";
import Select from "react-select";
import { selectOptions, theme, myElement } from "./utils.js";

const CheckFlowTypes = () => {
  const [element, showElement] = useState({});
  const checkType = (typeName) =>
    element.hasOwnProperty("value") && element.value === typeName;

  return (
    <div className="checkDiv">
      <Select
        className="checkSelect"
        onChange={showElement}
        options={selectOptions}
        placeholder="choose a type"
        theme={theme}
      />
      {checkType(element.value) && myElement(element.value)}
    </div>
  );
};

export default CheckFlowTypes;
