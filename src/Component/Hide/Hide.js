import { React, useState, useEffect } from "react";

const Hide = () => {
  const [count, setcount] = useState(0);
  const [text, settext] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    document.title = `clicked${count}times`;
    console.log("this is happening");
  }, [count]);

  const forClick = () => {
    setcount((prevCount) => prevCount + 1);
  };

  const tik = () => {
    // console.log("time is running");
    setDate(new Date());
  };
  useEffect(() => {
    console.log("time is on");
    const inteval = setInterval(tik, 1000);
    return () => {
      console.log("time is off");
      clearInterval(inteval);
    };
  }, []);
  return (
    <div>
      <button onClick={forClick}>click</button>
      <p>time:{date.toLocaleTimeString()}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
    </div>
  );
};

export default Hide;
