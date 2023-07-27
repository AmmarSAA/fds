/*****************************
 * Original File: home.html  *
 * File Name: home.jsx       *
 * Translater: Ammar S.A.A   *
 ****************************/

import React from 'react';
import './home.css';

export default function Home() {
  const handleGroceryOrder = () => {
    // Add logic to handle grocery order using WhatsApp API
    // For example: window.open('https://api.whatsapp.com/send?phone=+917717406841&text=I wanted to order grocery/meat/vegetables');
  };
  const openAbout = () => {
    // Add logic to open the "about" section or perform any other action.
  };
  const closeNav = () => {
    document.getElementById("about").style.width = "0%";
  };
  return (
    <>

      {/* <div className="loader-container" id="loader">
        <img src="./Images/loader/loader.gif" />
      </div> */}

      {/*Header section start*/}
      {/* Header section ends*/}
      {/*Home section start*/}
      <section className="home" id="home-section">
        {/*Add*/}
        <div className="add">
          <div className="add-container">
            <img src="./Images/banner/burger banner.jpg" />
            <div className="textimg">
              <h2>
                30% off on your
                <br /> first order
              </h2>
              <button className="ordr" onClick={() => handleGroceryOrder()}>
                Order Now
              </button>

            </div>
          </div>
        </div>
        {/*Add ends*/}
        {/*Specials*/}
        <div className="spl">
          <h2>Our Specials</h2>
        </div>
        <div className="table">
          <a href="./dishes.jsx">
            <img src="./Images/Dishes/Chicken-Biryani.jpg" height={150} />
            <h4>Biryani</h4>
          </a>
          <a href="./dishes.jsx">
            <img src="./Images/Dishes/chicken.jpeg" height={150} />
            <h4>Chicken Lolipop</h4>
          </a>
          <a href="./dishes.jsx">
            <img src="./Images/Dishes/panner tikka.jpg" height={150} />
            <h4>Panner Tikka</h4>
          </a>
          <a href="./dishes.jsx">
            <img src="./Images/Dishes/garlicprawns.jpg" height={150} />
            <h4>Garlic Prawns</h4>
          </a>
          <a href="./dishes.jsx">
            <img src="./Images/Dishes/vegpulao.jpg" height={150} />
            <h4>Veg Pulao</h4>
          </a>
          <a href="./dishes.jsx">
            <img src="./Images/Dishes/apollo fish.jpg" height={150} />
            <h4>Apollo fish</h4>
          </a>
        </div>
        {/*Top Restaurants*/}
        <div className="top-re">
          <h2>Top Restaurants</h2>
        </div>
        <div className="table1">
          <a href="./Barbeque.jsx">
            <img src="./Images/Restaurants/barbeque.jpg" height={150} />
            <h4>Barbeque</h4>
            <p>tandoori, biryani, Starters</p>
          </a>
          <a href="./mehfil.jsx">
            <img src="./Images/Restaurants/mehfil.jpg" height={150} />
            <h4>Mehfil</h4>
            <p>tandoori, biryani</p>
          </a>
          <a href="./paradise.jsx">
            <img src="./Images/Restaurants/paradise.jpg" height={150} />
            <h4>Paradise</h4>
            <p>tandoori, biryani, Starters, deserts</p>
          </a>
          <a href="./ramkibandi.jsx">
            <img src="./Images/Restaurants/ramkibandi.jpg" height={150} />
            <h4>Ram Ki Bandi</h4>
            <p>dosa</p>
          </a>
          <a href="./dominos.jsx">
            <img src="./Images/Restaurants/dominos.jpg" height={150} />
            <h4>Domino's</h4>
            <p>Pizza, Burger</p>
          </a>
          <a href="./vantilu.jsx">
            <img src="./Images/Restaurants/vantilu.jpeg" height={150} />
            <h4>Vantillu</h4>
            <p>tandoori, biryani, Starters</p>
          </a>
          <a href="./platform65.jsx">
            <img src="./Images/Restaurants/platform65.jpg" height={150} />
            <h4>Platform65</h4>
            <p>tandoori, biryani, Starters</p>
          </a>
        </div>
        <div className="container-grocery">
          <img
            src="./Images/banner/grocery-delivery.png"
            alt="Norway"
            style={{ width: "100%" }}
          />
          <div className="text-block">
            <h2>Chotu!</h2>
            <h4>Anything you need, delivered</h4>
            <p>
              Get your grocery, meat, vegetables at your door step
              <br />
              Stay Home and Enjoy our services.
            </p>
            <div className="ordergrocery">
              <a
                href="https://api.whatsapp.com/send?phone=+917717406841&text=I wanted to order grocery/meat/vegetables"
                className="orderg"
                onClick={() => handleGroceryOrder()}
              >
                <i className="fab fa-whatsapp" /> Order Now
              </a>

            </div>

          </div>
        </div>
        {/*Restaurants*/}
        <div className="res">
          <h2>14 Restaurants</h2>
          <hr className="line" />
        </div>
        <section className="barb" id="biryani">
          <h1 className="barbeque">Restaurants</h1>
          <hr className="line" />
          <div className="box-container">
            <div className="box">
              <a href="./barbeque.jsx">
                <img src="./Images/Restaurants/barbeque.jpg" />
              </a>
              <h3>Barbeque</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <br />
                <p>Starters,biryani,tandoori</p>
              </div>
            </div>
            <div className="box">
              <a href="./mehfil.jsx">
                <img src="./Images/Restaurants/mehfil.jpg" />
              </a>
              <h3>Mehfil</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <br />
                <p>Starters,biryani,tandoori</p>
              </div>
            </div>
            <div className="box">
              <a href="./dominos.jsx">
                <img src="./Images/Restaurants/dominos.jpg" />
              </a>
              <h3>Domino's</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <br />
                <p>Pizza ,Burger, Bread</p>
              </div>
            </div>
            <div className="box">
              <a href="./paradise.jsx">
                <img src="./Images/Restaurants/paradise.jpg" />
              </a>
              <h3>Paradise</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <br />
                <p>Starters,biryani,tandoori</p>
              </div>
            </div>
            <div className="box">
              <a href="./ramkibandi.jsx">
                <img src="./Images/Restaurants/ramkibandi.jpg" />
              </a>
              <h3>Ram ki Bandi</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <br />
                <p>Idli, Dosa, Breakfast</p>
              </div>
            </div>
            <div className="box">
              <a href="./vantilu.jsx">
                <img src="./Images/Restaurants/vantilu.jpeg" />
              </a>
              <h3>Vantillu</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <br />
                <p>Starters,biryani,tandoori</p>
              </div>
            </div>
            <div className="box">
              <a href="./platform65.jsx">
                <img src="./Images/Restaurants/platform65.jpg" />
              </a>
              <h3>Platform 65</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <br />
                <p>Starters,biryani,tandoori</p>
              </div>
            </div>
            <div className="box">
              <a href="./hoteladaab.jsx">
                <img src="./Images/Restaurants/aadab.png" />
              </a>
              <h3>Hotel Adaab</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <br />
                <p>Starters,biryani,tandoori</p>
              </div>
            </div>
            <div className="box">
              <a href="./fishland.jsx">
                <img src="./Images/Restaurants/fishland.jpg" />
              </a>
              <h3>Fish Land</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <br />
                <p>Starters,biryani,tandoori</p>
              </div>
            </div>
            <div className="box">
              <a href="./hitech.jsx">
                <img src="./Images/Restaurants/hitech.jpg" />
              </a>
              <h3>hitech</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <br />
                <p>Starters,biryani,tandoori</p>
              </div>
            </div>
            <div className="box">
              <a href="./hotnspicy.jsx">
                <img src="./Images/Restaurants/hotnspicy.jpg" />
              </a>
              <h3>Hot N Spicy</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <br />
                <p>Starters,biryani,tandoori</p>
              </div>
            </div>
            <div className="box">
              <a href="./mughal.jsx">
                <img src="./Images/Restaurants/mughal.jpg" />
              </a>
              <h3>Mughal Restaurants</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <br />
                <p>Starters,biryani,tandoori</p>
              </div>
            </div>
            <div className="box">
              <a href="./ksbakers.jsx">
                <img src="./Images/Restaurants/ksbakers.png" />
              </a>
              <h3>KS Bakers</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <br />
                <p>Starters,biryani,tandoori</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div id="about" className="about">
        <a href="#" className="closebtn" onClick={() => closeNav()}>

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
      </div >
      {/*Home  ends*/}
      {/*Footer Section*/}
    </>
  );
}