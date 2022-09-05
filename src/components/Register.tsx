import { useState } from "react";
import GoogleAuth from "./Home/GoogleAuth";
import LoginRegisterHeader from "./Home/LoginRegisterHeader";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const firstNameHandler = (event: any) => {
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event: any) => {
    setLastName(event.target.value);
  };
  const emailHandler = (event: any) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event: any) => {
    setPassword(event.target.value);
  };
  const confirmPasswordHandler = (event: any) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div className="landing-left">
      <LoginRegisterHeader title="Create New Account" register={true} />
      <form className="register-login-input-container">
        <div className="register-login-subcontainer">
          <input
            className="register-login-input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={firstNameHandler}
          />
          <input
            className="register-login-input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={lastNameHandler}
          />
        </div>
        <input
          className="register-login-input"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={emailHandler}
        />
        <input
          className="register-login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordHandler}
        />
        <input
          className="register-login-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={confirmPasswordHandler}
        />
        <button className="register-login-button">Register</button>
      </form>
      <GoogleAuth buttonText="Signup wit Google" />
    </div>
  );
}

export default Register;
