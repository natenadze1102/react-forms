import React, { useRef, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const i = useRef(null);
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = (x) => {
    return x.trim() !== "";
  }

  const enteredEmailIsValid = (inputEmail) => {
    inputEmail.includes('@');
  }

  const { value: enteredName, hasError: nameInputHasError, valueChangeHandler: nameChangeHandler, inputBlurHandler: nameInputBlurHandler, reset: resetInput } = useInput(enteredNameIsValid);
  console.log(enteredName, nameInputHasError, nameChangeHandler, nameInputBlurHandler)
  const { value: inputEmail, hasError: emailInputIsInvalid, valueChangeHandler: inputEmailHandler, inputBlurHandler: emailInputBlurHandler, reset: resetEmail } = useInput(enteredEmailIsValid);

  // const [emailInputIsTouched, setEmailInputIsTouched] = useState(false);
  // const [inputEmail, setInputEmail] = useState("")

  // const enteredEmailIsValid = inputEmail.includes('@');

  // const nameInputHasError = !enteredNameIsValid && enteredNameTouched;
  // const emailInputIsInvalid = !enteredEmailIsValid && emailInputIsTouched;

  let formIsValid = enteredNameIsValid && enteredEmailIsValid;

  // const nameChangeHandler = (e) => {

  //   setEnteredName(e.target.value)

  // };

  // const inputEmailHandler = (e) => {
  //   setInputEmail(e.target.value);
  //   setEmailInputIsTouched(true);
  // }


  // const nameInputBlurHandler = () => {
  //   setEnteredNameTouched(true);
  // };

  // const emailInputBlurHandler = () => {
  //   setEmailInputIsTouched(true);

  // }

  const formSubmitHandler = (e) => {
    e.preventDefault();


    setEnteredNameTouched(true);
    setEmailInputIsTouched(true);


    if (enteredName.trim() === "") {
      return;
    }

    resetInput();
    resetEmail();
  };

  const nameInputClasses = !nameInputHasError
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={i}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && <p>"Name must not be empty"</p>}

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={inputEmailHandler}
          onBlur={emailInputBlurHandler}
          value={inputEmail}
        />
      </div>
      {emailInputIsInvalid && <p>"Email must not be empty"</p>}
      <div className="form-actions">
        <button disabled={!formIsValid} className={!formIsValid ? 'disabled' : ''}>Submit</button>
      </div>
      <div>{enteredName}</div>
    </form>
  );
};

export default SimpleInput;
