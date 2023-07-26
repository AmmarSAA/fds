/*******************************
 * Original File: contact.html *
 * File Name: contact.jsx      *
 * Translater: Ammar S.A.A     *
 *******************************/

import React from 'react';
import './contact.css'

export default function Contact() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here, if needed.
    // For this example, the form is reset using the myFunction.
    myFunction();
  };

  const myFunction = () => {
    document.getElementById('form').reset();
  };

  return (
    <>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Us | Foodies</title>
  <link
    rel="icon"
    href="./Images/Restaurants/download.png"
    type="image/icon type"
  />
  <div className="row">
    <div className="box">
      <h2>
        <i className="fas fa-phone" /> Contact:9876543210
      </h2>
      <br />
      <h2>
        <i className="fas fa-at" /> Email: support@foodies.com
      </h2>
      <br />
      <h2>
        <i className="fa fa-map-marker" />
        5th Floor,
        <br />
        A-118,Sangareddy, Hyderabad,
        <br /> Telangana - 502001
      </h2>
    </div>
  </div>
  <div className="contact">
    <h1>Contact Us</h1>
    <form className="form" action="./home.html" id="form">
      <label htmlFor="uname">Name:</label>
      <input
        type="text"
        className="uname"
        name="name"
        placeholder="Enter Your Full Name"
      />
      <br />
      <textarea
        name="paragraph_text"
        className="formtext"
        cols={50}
        rows={10}
        placeholder="Enter Your Query here......"
        defaultValue={""}
      />
      <br />
      <input type="submit" className="submit" onClick="myFunction()" />
    </form>
  </div>
</>

  );
}
