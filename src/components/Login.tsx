import { useState } from "react";
import GoogleAuth from "./Home/GoogleAuth";
import LoginRegisterHeader from "./Home/LoginRegisterHeader";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (event: any) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <div className="landing-left">
      <LoginRegisterHeader title="Welcome Back" register={false} />
      <form className="register-login-input-container">
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
        <button className="register-login-button">Login</button>
      </form>
      <GoogleAuth buttonText="Login wit Google" />
    </div>
  );
}

export default Login;
