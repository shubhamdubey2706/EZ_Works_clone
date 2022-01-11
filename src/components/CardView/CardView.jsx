import React from "react";
import "./CardView.css";
import CardImage from "../CardImage/CardImage";
export default function CardView({ title, description, image }) {
  return (
    <>
      <div className="Card">
        <div className="Card-first">
          <div className="Card-image ">
            <div className="Card-image-img">
              <CardImage url={image} />
            </div>
          </div>
          <div className="Card-title"> {title}</div>
        </div>
        <div className="Card-description">{description}</div>
      </div>
    </>
  );
}
