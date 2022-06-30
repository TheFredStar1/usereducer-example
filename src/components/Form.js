import { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [emailErrMsg, setEmailErrMsg] = useState('');

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [passwordErrMsg, setPasswordErrMsg] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const onEmailChange = (e) => {
    const isValid = !e.target.value.includes('@') || e.target.value.trim().length < 4 ? false : true;
    let errMsg = '';

    if (!isValid) {

      if (!e.target.value.includes('@')) {
        errMsg = 'Please enter a valid email address';
      }

      if (e.target.value.trim().length < 4) {
        errMsg = 'Please enter an email longer than 4 or more characters';
      }
    }

    setEmail(e.target.value);
    setIsEmailValid(isValid);
    setEmailErrMsg(errMsg);

    if (isValid && isPasswordValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const onPasswordChange = (e) => {
    const isValid = e.target.value.trim().length < 4 ? false : true;
    let errMsg = '';

    if (!isValid) {
      errMsg = 'Please enter a password longer than 4 or more characters';
    }

    setPassword(e.target.value);
    setIsPasswordValid(isValid);
    setPasswordErrMsg(errMsg);

    if (isValid && isEmailValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <>
    <h1 className="my-4">Login Form</h1>
    <form>

      <div className={`form-group ${isEmailValid === false ? 'invalid' : ''}`}>
        <label htmlFor="email">Email:</label>
        <input 
          onChange={onEmailChange}
          value={email}
          className="form-control"
          id="email" 
          type="text" />
        {emailErrMsg && <span>{emailErrMsg}</span>}
      </div>

      <div className={`form-group ${isPasswordValid === false ? 'invalud' : ''}`}>
        <label htmlFor="password">Password:</label>
        <input 
          onChange={onPasswordChange}
          value={password}
          className="form-control"
          id="password" 
          type="password" />
        {passwordErrMsg && <span>{passwordErrMsg}</span>}
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