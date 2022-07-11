import React, { useRef, useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [formIsTouched, setFormIsTouched] = useState(false);
  const [inputEl, setInputEl] = useState("");
  const i = useRef(null);

  const enteredNameIsValid = inputEl.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && formIsTouched;

  const inputHandler = (e) => {
    setInputEl(i.current.value);
    setFormIsTouched(true);
  };

  const nameInputBlurHandler = () => {
    setFormIsTouched(true);
  };

  const formSubmittionHandler = (e) => {
    setFormIsTouched(true);
    e.preventDefault();
    if (inputEl.trim() === "") {
      // setEnteredNameValid(false);
      return;
    }
    // setEnteredNameValid(true);
    console.log("BLA BLA");
    setInputEl("");
    setFormIsTouched(false);
  };

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmittionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={i}
          onChange={inputHandler}
          onBlur={nameInputBlurHandler}
          value={inputEl}
        />
      </div>
      {!enteredNameIsValid && formIsTouched && <p>"Name must not be empty"</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
      <div>{inputEl}</div>
    </form>
  );
};

export default SimpleInput;
