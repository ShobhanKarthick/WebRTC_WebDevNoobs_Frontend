import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  register: boolean;
}

function LoginRegisterHeader(props: Props) {
  return (
    <React.Fragment>
      <div className="landing-page-slogan">Start for free. Start now.</div>
      <h1 className="register-login-head">
        {props.title} <span style={{ color: "#1c8cec" }}>.</span>
      </h1>
      {props.register ? (
        <div className="register-login-subtext">
          Already a member? <Link to="/login">Log in</Link>
        </div>
      ) : (
        <div className="register-login-subtext">
          Not yet a member? <Link to="/register">Register</Link>
        </div>
      )}
    </React.Fragment>
  );
}

export default LoginRegisterHeader;
