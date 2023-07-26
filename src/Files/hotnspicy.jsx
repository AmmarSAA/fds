/********************************
* Original File: hotnspicy.html *
* File Name: hotnspicy.jsx      *
* Translater: Ammar S.A.A       *
********************************/

import React from 'react'

export default function hotnspicy() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hot and Spicy | Restaurant</title>
  <link
    rel="icon"
    href="./Images/Restaurants/download.png"
    type="image/icon type"
  />
  <link rel="stylesheet" href="hotnspicy.css" />
  {/*Header section start*/}
  <header>
    <a href="#" className="logo">
      <i className="fa fa-utensils" />
      Foodies.
    </a>
    <nav className="navbar">
      <a className="active" href="./home.jsx">
        Home
      </a>
      <a href="./dishes.jsx">dishes</a>
      <a href="#" onClick="openAbout()">
        about
      </a>
      <a href="./contact.jsx">Contact us</a>
      <a className="feed" id="feedback">
        feedback
      </a>
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
  {/*Rating Form starts*/}
  <div className="back">
    <div className="container1" id="co1">
      <div className="post">
        <div className="text">Thanks for Rating us!</div>
        <div className="edit">Edit</div>
        <i className="fas fa-times" id="close" />
      </div>
      <div className="star-widget">
        <input type="radio" name="rate" id="rate-5" />
        <label htmlFor="rate-5" className="fas fa-star" />
        <input type="radio" name="rate" id="rate-4" />
        <label htmlFor="rate-4" className="fas fa-star" />
        <input type="radio" name="rate" id="rate-3" />
        <label htmlFor="rate-3" className="fas fa-star" />
        <input type="radio" name="rate" id="rate-2" />
        <label htmlFor="rate-2" className="fas fa-star" />
        <input type="radio" name="rate" id="rate-1" />
        <label htmlFor="rate-1" className="fas fa-star" />
        <form action="#">
          <i className="fas fa-times" id="close" />
          <h4 />
          <div className="textarea">
            <textarea
              cols={30}
              placeholder="Describe your experience"
              defaultValue={""}
            />
          </div>
          <div className="btn">
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/*Rating form ends*/}
  {/*side bar*/}
  <nav className="sidebar">
    <div className="text">
      <a href="./hitech.jsx">
        <i className="fa fa-home" />
      </a>
      <ul>
        <li>
          <a href="#biryani" onClick="myfun()">
            Biryani's
          </a>
        </li>
        <li>
          <a href="#start" onClick="myfunction()">
            Starter's
          </a>
        </li>
        <li>
          <a href="#roti" onClick="myroti()">
            Roti's
          </a>
        </li>
        <li>
          <a href="#soup" onClick="mycurry()">
            Soups's
          </a>
        </li>
        <li>
          <a href="#fast" onClick="myfastfood()">
            Fast food
          </a>
        </li>
      </ul>
    </div>
  </nav>
  {/*Side bar ends*/}
  <section className="home" id="home">
    <div className="barb">
      <h2>
        <img src="./Images/Restaurants/hotnspicy.jpg" height={150} />
      </h2>
      <div className="cont">
        <iframe
          width={420}
          height={315}
          src="https://www.youtube.com/embed/zc8DJMgkQR4?autoplay=1&mute=1&loop=1&playlist=zc8DJMgkQR4&loop=1"
        ></iframe>
      </div>
    </div>
  </section>
  <section className="fastfood" id="fast">
    <h2 className="fastfood1">Hi-Tech</h2>
    <hr className="line" />
    <h4>Fast Food</h4>
    <div className="box-fast-food">
      <div className="box">
        <img src="./Images/Dishes/chicken-fried-rice.jpg" />
        <h3>Chicken Fried Rice</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹180</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/veg-fried rice.jpg" />
        <h3>Veg-Fried Rice</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹110</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/veg-manchuria.jpg" />
        <h3>Veg-Manchuria</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹120</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken-manchuria.jpg" />
        <h3>Chicken Manchuria</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹250</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/paneer-fried rice.jpg" />
        <h3>Paneer Fried Rice</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹160</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/egg-fried-rice.jpg" />
        <h3>Egg Fried Rice</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹150</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
    </div>
  </section>
  {/*Curry menu*/}
  <section className="soups" id="soup">
    <h2 className="hotnspicy">Hot n Spicy</h2>
    <hr className="line" />
    <h4>Soup</h4>
    <div className="box-soup">
      <div className="box">
        <img src="./Images/Dishes/tomato-soup.gif" />
        <h3>Tomato Soup</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹75</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/hot-sour-soup.jpg" />
        <h3>Veg-Hot-Sour-Soup</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹75</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/veg-manchow soup.jpg" />
        <h3>Veg Manchow Soup</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹80</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/sweet corn soup.jpg" />
        <h3>veg-sweet corn soup</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹90</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken-soup.jpg" />
        <h3>Chicken Soup</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹100</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chinese-hot-and-sour-soup.jpg" />
        <h3>Chicken hot and sour soup</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹110</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/veg-manchow soup.jpg" />
        <h3>chicken manchow soup</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹125</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken-sweet-corn soup.jpg" />
        <h3>Chicken Sweet corn Soup</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹150</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
    </div>
  </section>
  <section className="rotis" id="roti">
    <h2 className="hitech">Hi-Tech</h2>
    <hr className="line" />
    <h4>Roti's</h4>
    <div className="box-roti">
      <div className="box">
        <img src="./Images/Dishes/butter-naan.jpg" />
        <h3>Butter-Naan</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹40</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/roomali-roti.jpg" />
        <h3>Roomali Roti</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹15</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/tandoori-roti.jpg" />
        <h3>Tandoori Roti</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹35</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chapathi.jpg" />
        <h3>Chapathi</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹20</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/garlicnaan.jpg" />
        <h3>Garlic Naan</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹35</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/plain-naan.jpg" />
        <h3>Plain-Naan</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹25</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/butter-roti.jpg" />
        <h3>Butter-Roti</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹20</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
    </div>
  </section>
  <section className="starters" id="start">
    <h2 className="hitech">Hi-Tech</h2>
    <hr className="line" />
    <h4>Starters</h4>
    <div className="box-starters">
      <div className="box">
        <img src="./Images/Dishes/chicken-manchuria.jpg" />
        <h3>Chicken Manchurian Full</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹350</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken-fry.jpg" />
        <h3>Chicken Fry</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹359</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken-lollipop.jpg" />
        <h3>Chicken lollipop</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹220</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken-wings.jpg" />
        <h3>Chicken Wings</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹210</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/apollo fish.jpg" />
        <h3>Apollo Fish</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹210</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken-65.jpg" />
        <h3>Chicken-65</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹210</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/tandoori-chicken.jpg" />
        <h3>Tandoori chicken</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹210</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/panner-tikka.jpg" />
        <h3>Panner Tikka</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹210</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/veg-manchuria.jpg" />
        <h3>Veg Manchurian</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹210</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
    </div>
  </section>
  <section className="meh" id="biryani">
    <h2 className="hitech">Hi-Tech</h2>
    <hr className="line" />
    <h4>Biryani's</h4>
    <div className="box-container">
      <div className="box">
        <img src="./Images/Dishes/Chicken-Biryani.jpg" />
        <h3>Chicken Biryani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹120</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/ragi-sangati.jpeg" />
        <h3>Rayalaseema Ragi Sangati</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹320</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/egg biryani.jpg" />
        <h3>Egg Biryani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹90</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/mutton biryani.jpeg" />
        <h3>Mutton Biryani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹140</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/vegpulao.jpg" />
        <h3>Veg Biryani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹140</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/kachi chicken biryani.jpg" />
        <h3>Hyderabadi Kachi Chicken Biryani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹140</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/boneless biryani.jpg" />
        <h3>Boneless Biryani Biryani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹140</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/keema biryani.jpg" />
        <h3>Mutton Keema biryani Biryani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹140</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/fishbiryani.jpg" />
        <h3>Fish Biryani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹140</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/prawns biryani.jpg" />
        <h3>Prawns Biryani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹140</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/ulvacharu biryani.jpg" />
        <h3>Ulvacharu Chicken Biryani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹140</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/kachi chicken biryani.jpg" />
        <h3>Kaju Biryani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹140</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/paneer biryani.jpg" />
        <h3>Paneer Biryani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹110</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/mushroom biryani.jpg" />
        <h3>Mushroom Biryani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹110</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
    </div>
  </section>
  <div className="arrow">
    <a href="#home">
      <i className="fas fa-arrow-up" />
    </a>
  </div>
  <div id="about" className="about">
    <a href="#" className="closebtn" onClick="closeNav()">
      ×
    </a>
    <div className="about-overlay">
      <h1>About us</h1>
      <p>
        Launched in 2021, Our technology platform connects customers,
        <br />
        restaurant partners and delivery partners, serving their multiple needs.{" "}
        <br />
        Customers use our platform to search and discover restaurants, read and
        write customer generated reviews and view and upload photos,
        <br /> order food delivery, book a table and make payments while
        dining-out at restaurants. On the other hand,
        <br /> we provide restaurant partners with industry-specific marketing
        tools which enable them to engage and acquire customers
        <br /> to grow their business while also providing a reliable <br />
        and efficient last mile delivery service. We also operate a one-stop
        procurement solution, <br />
        Hyperpure, which supplies high quality ingredients and kitchen products
        to restaurant partners.
        <br /> We also provide our delivery partners with transparent and
        flexible earning opportunities.{" "}
      </p>
    </div>
  </div>
  {/*Footer Section*/}
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <ul>
            <i className="fa fa-utensils" />
            <span>Foodies.</span>
          </ul>
          <div className="map">
            <ul>
              <i className="fa fa-map-marker" />
              <span>
                5th Floor, A-118,Sangareddy, Hyderabad, Telangana - 502001
              </span>
            </ul>
          </div>
          <div className="mail">
            <ul>
              <i className="fas fa-inbox" />
              <span>support@foodies.com</span>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <h4>Foodies</h4>
          <ul>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">Our services</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Payment policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get help</h4>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">My orders</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Payment options</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Order Now</h4>
          <ul>
            <li>
              <a href="#">Biryani's</a>
            </li>
            <li>
              <a href="#">Restaurants</a>
            </li>
            <li>
              <a href="#">Starters</a>
            </li>
            <li>
              <a href="#">Fast food</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow us</h4>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*Home  ends*/}
  {/*Java Script*/}
  {/*JavaScript ends */}
</>

  )
}
