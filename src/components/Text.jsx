import React, { useState } from "react";

const Text = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <h1>{value}</h1>
      <p>
        Nurmuhamed
        <br />
        Rabiya
        <br />
        Asylay
        <br />
        Maksat
        <br />
        Daniel
        <br />
      </p>
    </div>
  );
};

export default Text;
