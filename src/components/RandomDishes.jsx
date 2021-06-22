import React from "react";
import DishesList from "./DishesList";

const RandomDishes = ({ dishes, addDishes, skip, setSkip }) => {
  return (
    <>
      {dishes.map((el) => {
        return (
          <DishesList
            skip={skip}
            setSkip={setSkip}
            addDishes={addDishes}
            key={el.idMeal}
            {...el}
          />
        );
      })}
    </>
  );
};

export default RandomDishes;
