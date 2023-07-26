/************************************
* Original File: ramkibandi.html    *
* File Name: ramkibandi.jsx         *
* Translater: Ammar S.A.A           *
************************************/

import React from 'react'

export default function ramkibandi() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ram Ki Bandi | Restaurant</title>
  <link
    rel="icon"
    href="./Images/Restaurants/download.png"
    type="image/icon type"
  />
  <link rel="stylesheet" href="ramkibandi.css" />
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
      <a href="./ramkibandi.jsx">
        <i className="fa fa-home" />
      </a>
      <ul>
        <li>
          <a href="#fast" onClick="mybreakfast()">
            Break Fast
          </a>
        </li>
      </ul>
    </div>
  </nav>
  {/*Side bar ends*/}
  <section className="home" id="home">
    <div className="barb">
      <h2>
        <img src="./Images/Restaurants/vantilu.jpeg" height={150} />
      </h2>
      <div className="cont">
        <iframe
          width={350}
          height={315}
          src="https://www.youtube.com/embed/Dc9UEGdRyb8?autoplay=1&mute=1&loop=1&playlist=Dc9UEGdRyb8&loop=1"
        ></iframe>
      </div>
    </div>
  </section>
  <section className="breakfast" id="fast">
    <h2 className="breakfast1">Ram Ki Bandi</h2>
    <hr className="line" />
    <h4>Break Fast</h4>
    <div className="box-break-fast">
      <div className="box">
        <img src="./Images/Dishes/dosa.jpg" />
        <h3>Plain Dosa</h3>
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
        <img src="./Images/Dishes/masala-dosa.jpg" />
        <h3>Masala Dosa</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹50</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/onion dosa.jpg" />
        <h3>Onion Dosa</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹60</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/idli-dosa.jpg" />
        <h3>Idli</h3>
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
        <img src="./Images/Dishes/puri.jpg" />
        <h3>Puri</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹30</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/uttapam.jpg" />
        <h3>Uttapam</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹45</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/vada.jpg" />
        <h3>Vada</h3>
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
        <img src="./Images/Dishes/mysorebonda.jpg" />
        <h3>Mysore Bonda</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹30</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
    </div>
  </section>
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
