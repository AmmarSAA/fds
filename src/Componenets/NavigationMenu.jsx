/*********************************
* File Name: NavigationMenu.jsx  *
* Author: Ammar S.A.A            *
* Output: Navbar                 *
*********************************/

import React, { useEffect, useState } from 'react';

function openAbout() {
  document.getElementById("about").style.width = "100%";
}

function closeNav() {
  document.getElementById("about").style.width = "0%";
}

function mygrocery() {
  confirm("Order Now on Whatsapp click ok to continue");
}

export default function NavigationMenu() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    setPreloaderVisible(false);
  }, []);

  return (
    <>
      {preloaderVisible && (
        <div className="loader-container" id="loader">
          <img src="./Images/loader/loader.gif" />
        </div>
      )}
      <header>
      <a href="#" className="logo">
        <i className="fa fa-utensils" />
        Foodies.
      </a>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/dishes">dishes</a>
        <a href="#" onClick={openAbout}>
          about
        </a>
        <a className="feed" id="feedback">
          feedback
        </a>
        <a href="/contact">Contact us</a>
        <a href="#">Orders</a>
      </nav>
      <div className="icons">
        <i className="fas fa-bars" id="menu-bars" />
        <i className="fas fa-search" id="search-icon" />
        <a href="#" className="fas fa-heart" />
        <a href="#" className="fas fa-shopping-cart" />
        <i className="fa fa-user" aria-hidden="true" />
        <a href="login.jsx" className="fas fa-sign-in-alt" />
      </div>
      {/*search form*/}
      <form action="" id="search-form">
        <input
          type="search"
          placeholder="search here..."
          name=""
          id="search-box"
        />
        <label htmlFor="search-box" className="fas fa-search" />
        <i className="fas fa-times" id="close1" />
      </form>
      {/*Search Form ends*/}
    </header>
    </>
  );
}