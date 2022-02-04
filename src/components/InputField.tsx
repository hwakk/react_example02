import React from "react";

const InputField = (props: any) => {
  return (
    <>
      <div className="App">
        <input
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
        <br />
        <div style={{ color: "red" }}>{props.errorMessage}</div>
      </div>
    </>
  );
};

export default InputField;
