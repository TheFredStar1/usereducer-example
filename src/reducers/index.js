export const emailReducer = (state, action) => {
  if (action.type === 'EMAIL_CHANGE') {
    const isEmailValid = !action.payload.includes('@') || action.payload.trim().length < 4 ? false : true;
    let errMsg = '';
    if (!isEmailValid) {

      if (!action.payload.includes('@')) {
        errMsg = 'Please enter a valid email address';
      }

      if (action.payload.trim().length < 4) {
        errMsg = 'Please enter an email longer than 4 or more characters';
      }
    }

    return { value: action.payload, isValid: isEmailValid, emailErrMsg: errMsg };
  }
};

export const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_CHANGE') {
    const isPasswordValid = action.payload.trim().length < 4 ? false : true;
    let errMsg = '';
  
    if (!isPasswordValid) {
      errMsg = 'Please enter a password longer than 4 or more characters';
    }

    return { value: action.payload, isValid: isPasswordValid, passwordErrMSg: errMsg };
  }
};