import useInput from '../hooks/use-input';

const BasicForm = (props) => {

  let buttonEnabled = false;

  const {
    value: firstNameInputValue,
    hasError: firstNameInputHasError,
    inputChangeHandler: firstNameInputChangeHandler,
    valueBlurHandler: firstNameValueBlurHandler,
    } = useInput(value => value.trim() !== "");

  const {
    value: lastNameInputValue,
    hasError: lastNameInputHasError,
    inputChangeHandler: lastNameInputChangeHandler,
    valueBlurHandler: lastNameValueBlurHandler,
    } = useInput(value => value.trim() !== "");

  const {
    value: emailInputValue,
    hasError: emailInputHasError,
    inputChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailValueBlurHandler,
    } = useInput(value => value.includes('@'));
  
  if(!firstNameInputHasError && !lastNameInputHasError && !emailInputHasError) {
    buttonEnabled = true;
  }
  
  return (
    <form>
      <div className={firstNameInputHasError ? 'control-group invalid' : 'control-group'}>
        <div className='form-control'>
          <label htmlFor='firstname'>First Name</label>
          <input 
            type='text' 
            id='firstname' 
            value={firstNameInputValue}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameValueBlurHandler}
            />
            {firstNameInputHasError && <p>This is not an acceptable value for first name.</p>}
        </div>
        <div className={lastNameInputHasError ? 'control-group invalid' : 'control-group'}>
          <label htmlFor='lastname'>Last Name</label>
          <input 
            type='text' 
            id='lastname' 
            value={lastNameInputValue}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameValueBlurHandler}
            />
            {lastNameInputHasError && <p>This is not an acceptable value for last name.</p>}
        </div>
      </div>
      <div className={emailInputHasError ? 'control-group invalid' : 'control-group'}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
            type='text' 
            id='email' 
            value={emailInputValue}
            onChange={emailInputChangeHandler}
            onBlur={emailValueBlurHandler}
            />
            {emailInputHasError && <p>This is not an acceptable value for email.</p>}
      </div>
      <div className='form-actions'>
        <button className={!buttonEnabled ? 'disabled' : ''}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
