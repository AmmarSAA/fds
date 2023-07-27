/*******************************
* Original File: dominos.html  *
* File Name: dominos.jsx       *
* Translater: Ammar S.A.A      *
*******************************/

import React from 'react'
import "./dominos.css"
import RatingForm from '../Componenets/RatingForm'

export default function dominos() {
  return (
    <>
  {/*Header section start*/}
  {/*Rating Form starts*/}
  <RatingForm />
  {/*Rating form ends*/}
  {/*side bar*/}
  <nav className="sidebar">
    <div className="text">
      <a href="./dominos.jsx">
        <i className="fa fa-home" />
      </a>
      <ul>
        <li>
          <a href="#pizza" onClick="myfun()">
            Veg Pizza
          </a>
        </li>
        <li>
          <a href="#nonpizza" onClick="myfunction()">
            Non-veg Pizza
          </a>
        </li>
        <li>
          <a href="#Mania" onClick="myroti()">
            Pizza Mania
          </a>
        </li>
      </ul>
    </div>
  </nav>
  {/*Side bar ends*/}
  <section className="home" id="home">
    <div className="barb">
      <h2>
        <img src="./Images/Restaurants/dominos_social_logo.jpg" height={350} />
      </h2>
      <div className="cont">
        <iframe
          width={420}
          height={315}
          src="https://www.youtube.com/embed/wj9NMpwVugQ?autoplay=1&mute=1&loop=1&playlist=wj9NMpwVugQ&loop=1"
        ></iframe>
      </div>
    </div>
  </section>
  <section className="pizzamania" id="mania">
    <h2 className="dominos">Domino's</h2>
    <hr className="line" />
    <h4>Pizza Mania</h4>
    <div className="box-mania">
      <div className="box">
        <img src="./Images/Dishes/veg-loaded.jpg" />
        <h3>veg-loaded</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹199</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/cheesy-pizza.png" />
        <h3>Cheesy pizza</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹99</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/capsicum pizza.jpg" />
        <h3>Capsicum Pizza</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹79</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/onion_pizza.jpg" />
        <h3>Onion Pizza</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹65</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/non-veg_loaded.jpg" />
        <h3>Non-Veg Loaded</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹165</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/PepperBarbequeChicken.jpg" />
        <h3>Pepper BarbequeChicken</h3>
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
    </div>
  </section>
  <section className="nonveg" id="nonpizza">
    <h2 className="dominos">Domino's</h2>
    <hr className="line" />
    <h4>Non-Veg Pizza</h4>
    <div className="box-nonpizza">
      <div className="box">
        <img src="./Images/Dishes/Pepper_Barbeque_&_Onion.jpg" />
        <h3>Pepper Barbecue &amp; Onion</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹439</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken-golden-delight.png" />
        <h3>Chicken Golden Delight</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹499</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken-fiesta.jpg" />
        <h3>Chicken Fiesta</h3>
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
        <img src="./Images/Dishes/PepperBarbequeChicken.jpg" />
        <h3>Pepper Barbeque Chicken</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹439</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken-sausage.png" />
        <h3>Chicken Sausage</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹379</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/Non-Veg_Supreme.jpg" />
        <h3>Non Veg Supreme</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹619</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/indi-chicken-tikkapizza.jpg" />
        <h3>Indi Chicken Tikka</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹610</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/keema-do-pizza.jpg" />
        <h3>Keema Do Pyaza</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹438</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/Moroccan Spice Pasta Pizza - Non Veg.jpg" />
        <h3>Moroccan Spice Pasta Pizza - Non Veg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹440</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
    </div>
  </section>
  <section className="veg" id="pizza">
    <h2 className="dominos">Dominos</h2>
    <hr className="line" />
    <h4>Veg-Pizza</h4>
    <div className="box-container">
      <div className="box">
        <img src="./Images/Dishes/double-chesse-margherita.png" />
        <h3>Double cheese marghherita</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹339</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/fresh-veggie.jpg" />
        <h3>Fresh veggie Pizza</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹339</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/margherita.jpg" />
        <h3>Margherita</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹199</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/farmhouse.jpg" />
        <h3>Farm house</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹399</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/peppy-paneer.jpg" />
        <h3>Peppy Paneer</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹399</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/mexican-greenwave.jpg" />
        <h3>Mexican Greenwave</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹399</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/veggie-paradise.jpg" />
        <h3>Veggie Paradise</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹399</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/IndianTandooriPaneer.jpg" />
        <h3>Indi Tandoori Panner</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹459</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/Paneer_Makhni.jpg" />
        <h3>Paneer Makhani</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹459</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/achari do pyaza.jpg" />
        <h3>Achari do Pyaza</h3>
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
        <img src="./Images/Dishes/cheese-n-corn.png" />
        <h3>Cheese and corn Pizza</h3>
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
        <img src="./Images/Dishes/cheese n tomato.png" />
        <h3>Cheese and Tomato</h3>
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
        <img src="./Images/Dishes/moroccan spice pasta pizza.jpg" />
        <h3>Moroccan Spice Pasta Pizza - Veg</h3>
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
  {/*Footer Section*/}
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
