import { useState, useReducer, useEffect } from 'react';
import { emailReducer, passwordReducer } from '../reducers';

const Form = () => {
  const [emailState, emailDispatch] = useReducer(emailReducer, {
    value: '',
    isValid: null,
    emailErrMsg: ''
  });

  const [passwordState, passwordDispatch] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
    passwordErrMSg: ''
  })

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(emailState.isValid && passwordState.isValid ? true : false);
  }, [emailState.isValid, passwordState.isValid]);

  const onEmailChange = (e) => emailDispatch({type: 'EMAIL_CHANGE', payload: e.target.value});
  
  const onPasswordChange = (e) => passwordDispatch({type: 'PASSWORD_CHANGE', payload: e.target.value});

  return (
    <>
    <h1 className="my-4">Login Form</h1>
    <form>

      <div className={`form-group ${emailState.isValid === false ? 'invalid' : ''}`}>
        <label htmlFor="email">Email:</label>
        <input 
          onChange={onEmailChange}
          value={emailState.value}
          className="form-control"
          id="email" 
          type="text" />
        {emailState.emailErrMsg && <span>{emailState.emailErrMsg}</span>}
      </div>

      <div className={`form-group ${passwordState.isValid === false ? 'invalud' : ''}`}>
        <label htmlFor="password">Password:</label>
        <input 
          onChange={onPasswordChange}
          value={passwordState.value}
          className="form-control"
          id="password" 
          type="password" />
        {passwordState.passwordErrMSg && <span>{passwordState.passwordErrMSg}</span>}
      </div>

      <div className="form-group mt-3">
        <button 
          disabled={!isFormValid}
          className="btn btn-primary btn-md"
          type="submit">Log In</button>
      </div>
    </form>
    </>
  );
};

export default Form;