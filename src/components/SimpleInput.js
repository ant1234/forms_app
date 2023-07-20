import { useState } from "react";

const SimpleInput = (props) => {

  const [nameInput, setNameInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);

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
    if(!nameInput || !isTouched) {
      return
    }
    setNameInput('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-control">
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name'
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
           />
           <p>That is an unacceptable value.</p>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
