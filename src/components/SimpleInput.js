import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const { 
    value: enteredName, 
    hasError: nameInputHasError, 
    valueIsValid: enteredNameIsValid,
    inputChangeHandler: nameChangeHandler, 
    valueBlurHandler: nameBlurHandler
   } = useInput(value => value.trim() !== "");

   const { 
    value: enteredEmail, 
    hasError: emailInputHasError, 
    valueIsValid: enteredEmailIsValid,
    inputChangeHandler: emailChangeHandler, 
    valueBlurHandler: emailBlurHandler
   } = useInput(value => value.includes('@'));

 
  const nameInputClass = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClass = emailInputHasError ? 'form-control invalid' : 'form-control';

  const onSubmitHandler = () => {

  };


  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClass }>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name'
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
           />
           {nameInputHasError && <p>That is an unacceptable value.</p> }
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>Your email</label>
        <input 
          type='email' 
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
           />
           {emailInputHasError && <p>That is an unacceptable value.</p> }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
