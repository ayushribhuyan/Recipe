import React from "react";
import style from './food.module.css';

function Recipe(props) {
  return (
    <div className={style.food}>
      <img src={props.image} className={style.image} alt={props.label}></img>
      <div className="card-body">
        <h2>{props.title}</h2>
        <p className="font-weight-bold"> Calories:<span style={{ color: '#00FF00' }}> {props.calory} Cal</span></p>
        <p className="font-weight-bold">Number of servings:<span style={{color: '#00FF00'}}> {props.yield}</span></p>
        {/* <button class="accordin" 
        
        onClick={function(el) {
          // el.classList.toggle("active");
          // var e = el.nextElementSibling;
          // "block" === e.style.display
          //   ? (e.style.display = "none")
          //   : (e.style.display = "block");
          console.log(el);
        }}
        // ref = {(button) => {this.button = button}}
        >
          <h3 itemprop="name">Ingredients</h3>
        </button>
        <div class="content" itemscope itemprop="acceptedAnswer">
          <ul>
            {props.ingredients.map(i => (
              <li>{i.text}</li>
            ))}
          </ul>
          
        </div> */}

      </div>
      <button className={style.myStyle}><a href={props.url} className={style.linkStyle} target="_blank" role="button">View Recipe >> </a></button>
    </div>
  );
}
export default Recipe;
