import React from "react";
import style from './food.module.css';

function Recipe(props) {
  return (
    <div className={style.food}>
      <img src={props.image} className={style.image} alt={props.label}></img>
      <div className="card-body">
        <h2>{props.title}</h2>
        <p className="font-weight-bold"> Calories-<span style={{ color: '#157013' }}> {props.calory} Cal</span></p>
      </div>
      <button className={style.myStyle}><a href={props.url} className={style.linkStyle} target="_blank" role="button">View Recipe >> </a></button>
    </div>
  );
}
export default Recipe;
