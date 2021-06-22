import React, { useRef, useState } from "react";
import "./modal.css";

const Modal = ({ active, setActive, createDishes }) => {
  let refInput = useRef(null);
  let refTextArea = useRef(null);
  const [titleInput, setTitleInput] = useState("");
  const [titleTextArea, setTitleTextArea] = useState("");

  const inputHandler = () => {
    setTitleInput(refInput.current.value);
  };

  const textAreaHandler = () => {
    setTitleTextArea(refTextArea.current.value);
  };

  const addDish = (event) => {
    if (titleInput === "" && titleTextArea === "") {
      alert("Вы не заполнили все поля");
    }
    createDishes(titleInput, titleTextArea);
  };

  return (
    <div
      className={active ? "modal_dish active" : "modal_dish"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal_dish__content active" : "modal_dish"}
        onClick={(event) => event.stopPropagation()}
      >
        <h4>Add custom dish</h4>
        <div className="input-field px1">
          <input
            onChange={inputHandler}
            value={titleInput}
            ref={refInput}
            type="text"
            placeholder="Dish title"
          />
          <textarea
            onChange={textAreaHandler}
            value={titleTextArea}
            ref={refTextArea}
            id="textarea"
            className="materialize-textarea"
            placeholder="Dish description..."
          ></textarea>
          <button
            onClick={() => addDish()}
            className="waves-effect waves-light btn"
          >
            Add custom dish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
