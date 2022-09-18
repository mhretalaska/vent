import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";

// Local Imports
import { auth, sendPasswordReset } from "../../firebase";
import Particle from "../../components/Particle";
import "../../assets/auth.scss";
import img from "../../assets/avataaars (1).png";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);

  return (
    <div className="auth__container">
      <Particle />
      <div className="login__container">
        <div className="left">
          <div className="header">Alyeska</div>
          <p>Enter your E-mail to reset your password.</p>
          <div className="form__container">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={() => sendPasswordReset(email)}>
              Send password reset email
            </button>
          </div>
          <Link to="/register">Don't have an account yet?</Link>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
