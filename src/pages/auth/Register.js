import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

// Local Imports
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import Particle from "../../components/Particle";
import "../../assets/auth.scss";
import img from "../../assets/avataaars (1).png";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter your name!");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
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
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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

            <button onClick={register}> Create</button>
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
          <Link to="/">Already have a space?</Link>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
