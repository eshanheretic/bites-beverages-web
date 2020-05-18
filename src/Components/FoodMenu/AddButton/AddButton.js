import React, { useState } from "react";

import "./AddButton.scss";

const AddButton = () => {
  const [addState, setAddState] = useState({
    quantity: 0,
  });

  const handleChange = (operation) => {
    let { quantity: newQuantity } = addState;
    console.log(newQuantity);
    console.log(
      "operation - ",
      operation,
      " operation === ",
      operation === "add"
    );
    if (operation === "add") {
      newQuantity += 1;
    } else {
      newQuantity -= 1;
    }

    console.log(newQuantity);

    setAddState({
      quantity: newQuantity,
    });
  };

  return (
    <div className="add-button-main">
      <button
        type="button"
        className="btn flex-row add-button justify-space-evenly"
        onClick={addState.quantity === 0 ? () => handleChange("add") : null}
      >
        <span
          onClick={() => handleChange("sub")}
          className={addState.quantity > 0 ? "fa fa-minus" : null}
        ></span>
        <span>{addState.quantity === 0 ? "Add" : addState.quantity}</span>
        <span
          onClick={() => handleChange("add")}
          className={addState.quantity > 0 ? "fa fa-plus" : null}
        ></span>
      </button>
    </div>
  );
};

export default AddButton;
