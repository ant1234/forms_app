import { useState } from "react";

const SimpleInput = (props) => {

  const [nameInput, setNameInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = nameInput.trim() !== "";
  const nameInputIsInvalid = !isValid && isTouched;

  const onChangeHandler = event => {

    setIsTouched(true);

    if(event.target.value.trim() !== '') {
      setNameInput(event.target.value.trim());
    }
    
  };

  const onBlurHandler = event => {

    setIsTouched(true);

    if(nameInput.trim() !== '') {
      setNameInput(nameInput);
    }
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    setIsTouched(true);
    if(!isValid) {
      return
    }
    setNameInput('');
    setIsTouched(false);
  };

  const inputClass = nameInputIsInvalid ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputClass}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name'
          value={nameInput}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
           />
           {nameInputIsInvalid && <p>That is an unacceptable value.</p> }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
