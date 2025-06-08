import "./date.css"


const Item = ({ img1, img2, text }) => {
  return (
    <div className="clothes_item">
      <img className="main_img_clothes" src={img2} alt="img1" />
      <img className="main_img_color" src={img1} alt="img2" />
      <p className="text_color" >{text}</p>
    </div>
  );
};

  export default Item;