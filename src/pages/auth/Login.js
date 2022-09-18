import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";

// Local Imports
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import Particle from "../../components/Particle";
import "../../assets/auth.scss";
import img from "../../assets/avataaars (1).png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <p>Create your own venting space.</p>
          <div className="form__container">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={() => logInWithEmailAndPassword(email, password)}>
              Join
            </button>
            <div className="oauth">
              <div className="oauth__lines">
                <div className="line"></div>
                <div>Or</div>
                <div className="line"></div>
              </div>
              <div className="oauth__links">
                <button onClick={signInWithGoogle}>
                  <FcGoogle />
                </button>
              </div>
            </div>
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
