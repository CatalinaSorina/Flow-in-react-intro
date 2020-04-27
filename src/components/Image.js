import React from "react";

type ImageProps = {
  imgSrc: string | Array<string>,
};

const Image = ({ imgSrc }: ImageProps) => (
  <>
    {typeof imgSrc === "string" && (
      <img
        style={{ width: "15rem", height: "15rem", borderRadius: "1rem" }}
        className="typeImg"
        src={imgSrc}
        alt="no pic"
      />
    )}

    {Array.isArray(imgSrc) &&
      imgSrc.map((src, i) => (
        <img
          key={i}
          style={{
            width: "5rem",
            height: "5rem",
            borderRadius: "1rem",
            marginRight: "0.5rem",
          }}
          className="typeImg"
          src={src}
          alt="no pic"
        />
      ))}
  </>
);

export default Image;
