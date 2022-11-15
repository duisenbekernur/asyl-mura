import React from "react";
import { Link, useParams } from "react-router-dom";

const Back = () => {
  const cityName = useParams().cityName;
  console.log(cityName)

  return (
    <Link to={`/memorials/${cityName}/`} className="back">
      {" "}
      {"<"}{" "}
    </Link>
  );
};

export default Back;
