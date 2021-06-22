import React from "react";

const Favorits = ({ savedDish, onRemove }) => {
  return (
    <div className="row">
      {savedDish.map((el) => {
        return (
          <div key={el.id} className="card-dish col s12 m4">
            <div className="card">
              <div className="card-image">
                <i
                  onClick={() => onRemove(el.id)}
                  className="material-icons red-text"
                >
                  delete
                </i>
                <img
                  src={
                    el.strMealThumb
                      ? el.strMealThumb
                      : "https://dummyimage.com/100/fff/0011ff.png&text=Image+Not+Found"
                  }
                  width={200}
                  height={400}
                  alt=""
                />
                <div className="content__dishes">
                  <span className="card-title">{el.strMeal}</span>
                </div>
              </div>
              <div className="card-content">
                <p>{el.strInstructions}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorits;
