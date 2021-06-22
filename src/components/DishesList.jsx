import React from "react";
import { Link } from "react-router-dom";

const DishesList = ({
  idMeal,
  strMealThumb,
  strYoutube,
  strMeal,
  strInstructions,
  addDishes,
  skip,
  setSkip,
}) => {
  return (
    <div className="row">
      <div className="col s12 m4"></div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img
              src={
                strMealThumb
                  ? strMealThumb
                  : "https://dummyimage.com/100/fff/0011ff.png&text=Image+Not+Found"
              }
              width={200}
              height={400}
              alt=""
            />
            <span className="card-title">{strMeal}</span>
          </div>
          <div className="card-content">
            <p>{strInstructions}</p>
          </div>
          <div className="row card-action">
            <div className="center col s12 m6">
              <button
                onClick={() => setSkip(!skip)}
                className="waves-effect waves-light btn"
              >
                skip
              </button>
            </div>
            <div className="center col s12 m6">
              <Link
                onClick={() =>
                  addDishes(
                    idMeal,
                    strMealThumb,
                    strYoutube,
                    strMeal,
                    strInstructions,
                    addDishes
                  )
                }
                className="waves-effect waves-light btn"
              >
                Like
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishesList;
