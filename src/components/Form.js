const Form = () => {
  return (
    <>
    <h1 className="my-4">Login Form</h1>
    <form>

      <div className="form-group">
        <label for="email">Email:</label>
        <input 
          className="form-control"
          id="email" 
          type="text" />
        <span>Error message for email field.</span>
      </div>

      <div className="form-group">
        <label for="password">Password:</label>
        <input 
          className="form-control"
          id="password" 
          type="password" />
        <span>Error message for password field.</span>
      </div>
      
      <div className="form-group mt-3">
        <button 
          disabled 
          className="btn btn-primary btn-md"
          type="submit">Log In</button>
      </div>
    </form>
    </>
  );
};

export default Form;