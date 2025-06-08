import "./date.css"
import dateImg from "../images/date.svg";
import datesImg from "../images/datesimg.svg";
import timing from "../images/timing.svg";
import item1 from "../images/item1.svg";
import item2 from "../images/item2.svg";
import item3 from "../images/item3.svg";
import item4 from "../images/item4.svg";
import item11 from "../images/item11.svg";
import item12 from "../images/item12.svg";
import item13 from "../images/item13.svg";
import item14 from "../images/item14.svg";
import womanImage from "../images/womanImage.svg"
import colors from "../images/colors.svg"

import Item from "./item";

const itemsData = [
  { img1: item2, img2: item13, text: "Черный" },
  { img1: item3, img2: item12, text: "Синий" },
  { img1: item4, img2: item14,  text: "Коричневый" },
  { img1: item1, img2: item11, text: "Серый" },
];

const Date = () => {

  return (
    <div className="date_background">
      <img className="main_img" src={dateImg} alt="main_img" />
      <img className="main_img_date" src={datesImg} alt="main_img" />
      <img className="main_img_timing" src={timing} alt="main_img" />
      <h1 className="h1_text">Дресс-код</h1>
      <p className="main__date_text">
        Нам будет очень приятно, если вы учтете наши пожелания и при выборе
        одежды предпочтете вечерние наряды в этой гамме:
      </p>
      <h2 className="h2_text">Мужчины:</h2>
      <div className="clothes_container">
        {itemsData.map((item, index) => (
          <Item
            key={index}
            img1={item.img1}
            img2={item.img2}
            text={item.text}
            index={index}
          />
        ))}
        </div>
        <h2 className="h2_text_woman">Девушки:</h2>
        <img className="main_img_woman" src={womanImage} alt="main_img" />
       <img className="main_img_colors" src={colors} alt="main_img" />
    </div>
  );
};

export default Date;