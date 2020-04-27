import React from "react";
import Type from "./Type";
import Image from "./Image.js";
import strImg from "../assets/string1.gif";
import numImg from "../assets/number.gif";
import boolImg from "../assets/boolean.gif";
import nullImg from "../assets/null.png";
import funcImg from "../assets/function.gif";
import objImg from "../assets/object.gif";

export const selectOptions = [
  { label: "string", value: "string" },
  { label: "number", value: "number" },
  { label: "boolean", value: "boolean" },
  { label: "null", value: "null" },
  { label: "function", value: "function" },
  { label: "object", value: "object" },
  { label: "array", value: "array" },
];

export const theme = (style) => ({
  ...style,
  colors: {
    ...style.colors,
    text: "gray",
    primary25: "pink",
    primary: "#fbae39",
  },
});

export const myElement = (name) => {
  switch (name) {
    case "string":
      return (
        <Type input={name}>
          <Image imgSrc={strImg} />
        </Type>
      );
    case "number":
      return (
        <Type input={name}>
          <Image imgSrc={numImg} />
        </Type>
      );
    case "boolean":
      return (
        <Type input={name}>
          <Image imgSrc={boolImg} />
        </Type>
      );
    case "null":
      return (
        <Type input={name}>
          <Image imgSrc={nullImg} />
        </Type>
      );
    case "function":
      return (
        <Type input={name}>
          <Image imgSrc={funcImg} />
        </Type>
      );
    case "object":
      return (
        <Type input={name}>
          <Image imgSrc={objImg} />
        </Type>
      );
    case "array":
      return (
        <Type input={name}>
          <Image imgSrc={[strImg, numImg, boolImg, nullImg, funcImg, objImg]} />
        </Type>
      );

    default:
      return null;
  }
};
