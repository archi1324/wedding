import "./date.css"


const Item = ({ img1, img2, text }) => {
  return (
    <div className="clothes_item">
      <div className="main_img_clothes">{img2}</div>
      <div className="main_img_color">{img1}</div>
      <p className="text_color">{text}</p>
    </div>
  );
};

  export default Item;