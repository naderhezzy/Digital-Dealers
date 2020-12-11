import React from "react";

const WorkerLogin = () => {
  return (
    <div className="container">
      <div className="main">
        <h2>Login Form Validation</h2>
        <form id="form_id" method="post" name="myform">
          <label>User Name :</label>
          <input type="text" name="username" id="username" />
          <label>Password :</label>
          <input type="password" name="password" id="password" />
          <input type="button" value="Login" id="submit" onclick="validate()" />
        </form>
      </div>
    </div>
  );
};

export default WorkerLogin;
