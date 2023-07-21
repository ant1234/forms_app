import { useState } from "react";

const useInput = (validateInput) => {

    const [inputValue, setInputValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateInput(inputValue);
    const hasError = !valueIsValid && isTouched;

    const inputChangeHandler = event => {
        setIsTouched(true);
        setInputValue(event.target.value.trim());
    };

    const valueBlurHandler = event => {
        setIsTouched(true);
    };

    return {
        value: inputValue,
        hasError,
        valueIsValid,
        inputChangeHandler,
        valueBlurHandler,
    }
};

export default useInput;