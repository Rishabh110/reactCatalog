/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from "react";
import { Product } from "./Cards";
import CardFull from "./cardFull";
const Card1: FC<{ product: Product }> = props => {
  //   console.log(props);
  return (
    <ul
      style={{
        width: "30%",
        height: 400,
        textAlign: "left",
        fontWeight: "bold",
        fontSize: 15,
        borderStyle: "double",
        float: "left",
        margin: "auto"
      }}
    >
      <li>ID: {props.product.id}</li>
      <li>Manufacturer Name: {props.product.manufacturerName}</li>
      <li>Description: {props.product.description}</li>
      <li>Price: {props.product.retailPrice}</li>
      <li>
        <img src={props.product.thumbnail} />
      </li>
      <li>
        <button onClick={e => CardFull}>Learn More</button>
      </li>
    </ul>
  );
};
export default Card1;
