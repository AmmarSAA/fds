/****************************
* Original File: login.html *
* File Name: login.jsx      *
* Translater: Ammar S.A.A   *
****************************/

import React from 'react';
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="loginbg">
          <div className="box signin">
            <h2>Already Have an Account ?</h2>
            <button className="signinbtn">Sign in</button>
          </div>
          <div className="box signup">
            <h2>Dont Have an Account ?</h2>
            <button className="signupbtn">Sign up</button>
          </div>
        </div>
        <div className="formbx">
          <div className="form signinform">
            <form>
              <h2>Foodies</h2>
              <h3>Sign In</h3>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <a href="/home">
                <input type="button" value="Login" />
              </a>
              <a href="#" className="forgot">
                Forgot password?
              </a>
            </form>
          </div>
          <div className="form signupform">
            <form>
              <h3>Sign up</h3>
              <input type="text" placeholder="Enter Your Name" />
              <input type="text" placeholder="Email" />
              <input type="date" placeholder="Enter your Date of birth" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm password" />
              <input type="submit" value="Sign Up" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
