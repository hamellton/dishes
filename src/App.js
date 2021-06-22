import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Favorits from "./components/Favorits";
import RandomDishes from "./components/RandomDishes";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const [savedDish, setSavedDish] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("dishes") || "[]");
    setSavedDish(saved);
  }, []);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => setDishes(res.data.meals));
  }, [savedDish, skip]);

  useEffect(() => {
    localStorage.setItem("dishes", JSON.stringify(savedDish));
  }, [savedDish]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => setDishes(res.data.meals));
  }, []);

  const addDishes = (
    id,
    strMealThumb,
    strYoutube,
    strMeal,
    strInstructions
  ) => {
    const likeDishes = {
      id: Date.now(),
      strMealThumb: strMealThumb,
      strMeal: strMeal,
      strInstructions: strInstructions,
    };
    setSavedDish((prevState) => [likeDishes, ...prevState]);
  };

  const createDishes = (inputTitle, textAreaTitle) => {
    const newDishes = {
      id: Date.now(),
      strMealThumb: null,
      strMeal: inputTitle,
      strInstructions: textAreaTitle,
    };

    setSavedDish((prevState) => [newDishes, ...prevState]);
  };

  return (
    <>
      <Navbar setModalActive={setModalActive} />
      <Route
        exact
        path="/"
        render={() => (
          <RandomDishes
            skip={skip}
            setSkip={setSkip}
            addDishes={addDishes}
            dishes={dishes}
          />
        )}
      />
      <Route
        path="/favorit-dishes"
        render={() => <Favorits savedDish={savedDish} />}
      />
      <Modal
        createDishes={createDishes}
        active={modalActive}
        setActive={setModalActive}
      />
    </>
  );
};

export default App;
