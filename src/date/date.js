import "./date.css"
import { ReactComponent as DateImg } from "../images/date.svg";
import { ReactComponent as DatesImg } from "../images/datesimg.svg";
import { ReactComponent as Timing } from "../images/timing.svg";
import { ReactComponent as Item1 } from "../images/item1.svg";
import { ReactComponent as Item2 } from "../images/item2.svg";
import { ReactComponent as Item3 } from "../images/item3.svg";
import { ReactComponent as Item4 } from "../images/item4.svg";
import { ReactComponent as Item11 } from "../images/item11.svg";
import { ReactComponent as Item12 } from "../images/item12.svg";
import { ReactComponent as Item13 } from "../images/item13.svg";
import { ReactComponent as Item14 } from "../images/item14.svg";
import { ReactComponent as WomanImage } from "../images/womanImage.svg";
import { ReactComponent as Colors } from "../images/colors.svg";

import Item from "./item";

const itemsData = [
  { img1: <Item2 />, img2: <Item13 />, text: "Черный" },
  { img1: <Item3 />, img2: <Item12 />, text: "Синий" },
  { img1: <Item4 />, img2: <Item14 />, text: "Коричневый" },
  { img1: <Item1 />, img2: <Item11 />, text: "Серый" },
];

const Date = () => {

  return (
    <div className="date_background">
     <DateImg className="main_img" />
      <DatesImg className="main_img_date" />
      <Timing className="main_img_timing" />
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
       <WomanImage className="main_img_woman" />
      <Colors className="main_img_colors" />
    </div>
  );
};

export default Date;