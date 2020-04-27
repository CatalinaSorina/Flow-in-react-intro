import React from "react";
import type { Node } from "react";
import Typing from "react-typing-animation";
import "./Type.css";

type TypeProps = {
  input: string,
  children: Node,
};

const Type = ({ input, children }: TypeProps) => {
  return (
    <div className="typeDiv">
      <Typing speed={200}>
        I am <input className="typeInput" value={input.toUpperCase()} disabled />
      </Typing>
      {children}
    </div>
  );
};

export default Type;
