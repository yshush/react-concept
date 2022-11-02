import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount((prev) => prev + 1);
  return (
    <div className="container">
      <div className="banner">
        Total Count : {count} {count > 10 ? "🌈" : "💧"}
      </div>
      <div className="counters">
        <Counter total={count} onClick={handleCount} />
        <Counter total={count} onClick={handleCount} />
      </div>
    </div>
  );
}
