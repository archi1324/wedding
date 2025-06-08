import React from "react";
import "./location.css";
import images from "../images/airplanes.webp";

const Location = () => {
  const handleClick = () => {
    window.open(
      "https://yandex.ru/maps/org/aerodromny_kompleks_maloy_aviatsii_pervushino/1142313359/?ll=55.753403%2C55.000229&z=5",
      "_blank"      // откроет в новой вкладке
    );
  };

  return (
    <>
      <h1 className="location_h1">Место проведения</h1>
      <p className="location_text">
        Наша свадьба будет проходить на аэродроме Первушино
      </p>
      <img className="location_img" src={images} alt="" loading="lazy" decoding="async"/>
      <button
        className="location_button"
        onClick={handleClick}
      >
        Посмотреть на карте
      </button>
    </>
  );
};

export default Location;
