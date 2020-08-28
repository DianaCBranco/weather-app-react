import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Loading() {
  return (
    <Loader
      type="ThreeDots"
      color="#BBE3F6"
      height={200}
      width={200}
      timeout={3000}
      className="Loader"
    />
  );
}
