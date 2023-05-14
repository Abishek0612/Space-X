import React, { useState } from "react";
import data from "./data";
import "./launch.scss";

const Launch = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(true);
  };

  return (
    <div className="launch">
      <div className="launch__container">
        {!isLoading && <h1>Loading....</h1>}
        {data.map((item) => (
          <div key={item.id} className="launch__content">
            <h3>TITLE : {item.title}</h3>
            <img
              className="launch__img"
              onLoad={handleImageLoad}
              src={item.image}
              alt={item.name}
            />
            <h4>ICON : {item.icon} </h4>
            <p>DESCRIPTION : {item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Launch;
