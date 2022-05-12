import React, { useState } from "react";
import Hide from "../Hide/Hide";

const Show = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div>{show && <Hide />}</div>
      <p>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? "hide post" : "show post"}
        </button>
      </p>
    </div>
  );
};

export default Show;
