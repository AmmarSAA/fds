/********************************
* Original File: ksbakers.html  *
* File Name: ksbakers.jsx       *
* Translater: Ammar S.A.A       *
********************************/

import React from 'react'
import "./ksbakers.css"
import RatingForm from '../Componenets/RatingForm'

export default function ksbakers() {
  return (
    <>
  {/*Rating Form starts*/}
  <RatingForm />
  {/*Rating form ends*/}
  {/*side bar*/}
  <nav className="sidebar">
    <div className="text">
      <a href="./ksbakers.jsx">
        <i className="fa fa-home" />
      </a>
      <ul>
        <li>
          <a href="#cakes" onClick="myfun()">
            Regular Cakes
          </a>
        </li>
        <li>
          <a href="#precakes" onClick="myfunction()">
            Premium Cakes
          </a>
        </li>
        <li>
          <a href="#pastry" onClick="mypastry()">
            Pastries
          </a>
        </li>
        <li>
          <a href="#burger" onClick="myburger()">
            Burgers
          </a>
        </li>
        <li>
          <a href="#bread" onClick="mybread()">
            Bread
          </a>
        </li>
        <li>
          <a href="#sandwich" onClick="mysandwich()">
            Sandwich
          </a>
        </li>
        <li>
          <a href="#nonpizza" onClick="mypizza()">
            Pizza
          </a>
        </li>
      </ul>
    </div>
  </nav>
  {/*Side bar ends*/}
  <section className="home" id="home">
    <div className="barb">
      <h2>
        <img src="./Images/Restaurants/ksbakers.png" height={150} />
      </h2>
      <div className="cont">
        <iframe
          width={420}
          height={315}
          src="https://www.youtube.com/embed/uBqBHsoMd08?autoplay=1&mute=1&loop=1&playlist=uBqBHsoMd08&loop=1"
        ></iframe>
      </div>
    </div>
  </section>
  <section className="brd" id="bread">
    <h2 className="ks">KS Bakers</h2>
    <hr className="line" />
    <h4>Bread</h4>
    <div className="box-bread">
      <div className="box">
        <img src="./Images/Dishes/dilkush.jpg" />
        <h3>Dil Kush</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹28</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/double ka meetha.jpg" />
        <h3>double ka meetha</h3>
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
        <img src="./Images/Dishes/creambread.jpg" />
        <h3>cream bread</h3>
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
        <img src="./Images/Dishes/toast.jpg" />
        <h3>
          Toast
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
        </h3>
      </div>
      <div className="box">
        <img src="./Images/Dishes/fruit bread.jpg" />
        <h3>Fruit Bread</h3>
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
        <img src="./Images/Dishes/pavbaji.jpg" />
        <h3>
          Pav Baji
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <span>₹129</span>
          <br />
          <a href="#" className="btn">
            Add to cart
          </a>
        </h3>
      </div>
    </div>
  </section>
  <section className="sand" id="sandwich">
    <h2 className="ks">KS Bakers</h2>
    <hr className="line" />
    <h4>Sandwich</h4>
    <div className="box-sandwich">
      <div className="box">
        <img src="./Images/Dishes/paneer-hot-dog.jpg" />
        <h3>Paneer Hot Dog</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹88</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken-hot-dog.webp" />
        <h3>Chicken Hot Dog</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹109</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken spring roll.jpg" />
        <h3>Chicken Spring Roll</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹94</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/mini-chicken-burger.jpg" />
        <h3>
          Mini Chicken Burger
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
        </h3>
      </div>
      <div className="box">
        <img src="./Images/Dishes/paneer-tikka-burger.JPG" />
        <h3>
          Pineapple tikka Burger
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <span>₹121</span>
          <br />
          <a href="#" className="btn">
            Add to cart
          </a>
        </h3>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken burger.jpg" />
        <h3>
          Chicken Burger
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <span>₹127</span>
          <br />
          <a href="#" className="btn">
            Add to cart
          </a>
        </h3>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken tika burger.jpg" />
        <h3>
          Chicken Tikka Burger
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <span>₹149</span>
          <br />
          <a href="#" className="btn">
            Add to cart
          </a>
        </h3>
      </div>
      <div className="box">
        <img src="./Images/Dishes/sandwich bread.jpg" />
        <h3>Sandwich Bread</h3>hh3&gt;
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
        <img src="./Images/Dishes/veg-burger.jpg" />
        <h3>Veg burger</h3>hh3&gt;
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹85</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/veg corn burger.jpg" />
        <h3>Veg Corn Burger</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹116</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/veghotdog.jpg" />
        <h3>Veg Hot Dog </h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹95</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
    </div>
  </section>
  <section className="burg" id="burger">
    <h2 className="ks">KS Bakers</h2>
    <hr className="line" />
    <h4>Burger</h4>
    <div className="box-burger">
      <div className="box">
        <img src="./Images/Dishes/paneer-hot-dog.jpg" />
        <h3>Paneer Hot Dog</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹88</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken-hot-dog.webp" />
        <h3>Chicken Hot Dog</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹109</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken spring roll.jpg" />
        <h3>Chicken Spring Roll</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹94</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/mini-chicken-burger.jpg" />
        <h3>
          Mini Chicken Burger
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
        </h3>
      </div>
      <div className="box">
        <img src="./Images/Dishes/paneer-tikka-burger.JPG" />
        <h3>
          Pineapple tikka Burger
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <span>₹121</span>
          <br />
          <a href="#" className="btn">
            Add to cart
          </a>
        </h3>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken burger.jpg" />
        <h3>
          Chicken Burger
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <span>₹127</span>
          <br />
          <a href="#" className="btn">
            Add to cart
          </a>
        </h3>
      </div>
      <div className="box">
        <img src="./Images/Dishes/chicken tika burger.jpg" />
        <h3>
          Chicken Tikka Burger
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <span>₹149</span>
          <br />
          <a href="#" className="btn">
            Add to cart
          </a>
        </h3>
      </div>
      <div className="box">
        <img src="./Images/Dishes/sandwich bread.jpg" />
        <h3>Sandwich Bread</h3>hh3&gt;
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
        <img src="./Images/Dishes/veg-burger.jpg" />
        <h3>Veg burger</h3>hh3&gt;
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹85</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/veg corn burger.jpg" />
        <h3>Veg Corn Burger</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹116</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/veghotdog.jpg" />
        <h3>Veg Hot Dog </h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹95</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
    </div>
  </section>
  <section className="past" id="pastry">
    <h2 className="ks">KS Bakers</h2>
    <hr className="line" />
    <h4>Pastry's</h4>
    <div className="box-pastry">
      <div className="box">
        <img src="./Images/Dishes/red-velvet pastry.jpg" />
        <h3>Red Velvet Pastry</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹127</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/blackforest pastry.jpg" />
        <h3>Black Forest Pastry</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹73</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/almond delight pastry.webp" />
        <h3>almond delight</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹109</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/pineapple pastry.jpg" />
        <h3>
          ButterScotch pastry
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <span>₹73</span>
          <br />
          <a href="#" className="btn">
            Add to cart
          </a>
        </h3>
      </div>
      <div className="box">
        <img src="./Images/Dishes/butterscotch pastry.jpg" />
        <h3>
          Pineapple pastry
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <span>₹73</span>
          <br />
          <a href="#" className="btn">
            Add to cart
          </a>
        </h3>
      </div>
      <div className="box">
        <img src="./Images/Dishes/dry fruit pastry.jpg" />
        <h3>
          Dry Fruit pastry
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <span>₹109</span>
          <br />
          <a href="#" className="btn">
            Add to cart
          </a>
        </h3>
      </div>
      <div className="box">
        <img src="./Images/Dishes/donut.jpg" />
        <h3>
          Donut
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <span>₹109</span>
          <br />
          <a href="#" className="btn">
            Add to cart
          </a>
        </h3>
      </div>
      <div className="box">
        <img src="./Images/Dishes/lyche pastry.png" />
        <h3>
          Lyche pastry
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <span>₹109</span>
          <br />
          <a href="#" className="btn">
            Add to cart
          </a>
        </h3>
      </div>
    </div>
  </section>
  <section className="choco" id="chococake">
    <h2 className="ks">KS Bakers</h2>
    <hr className="line" />
    <h4>Choclate cakes</h4>
    <div className="box-choco">
      <div className="box">
        <img src="./Images/Dishes/italian choclate cake.jpg" />
        <h3>Italian choclate cake 1kg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹936</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/choco tuffle cake.jpg" />
        <h3>Choco Tuffle cake 1kg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹1099</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/choco chips cake.jpg" />
        <h3>choco chips cake 1kg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹1034</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/eggless choclate cake.jpg" />
        <h3>Eggless choclate cake 1KG</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹1034</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
    </div>
  </section>
  <section className="pre" id="precakes">
    <h2 className="ks">KS Bakers</h2>
    <hr className="line" />
    <h4>Premium Cakes</h4>
    <div className="box-precake">
      <div className="box">
        <img src="./Images/Dishes/angry bird cake.jpg" />
        <h3>Angry Bird cake</h3>
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
        <img src="./Images/Dishes/rasmalai cake.jpg" />
        <h3>Rasmalai cake 1kg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹1204</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/almond delight.jpg" />
        <h3>Almond delight cake 1kg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹968</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/mix-dry-fruit-cake.jpg" />
        <h3>Mix Dry Fruit cake 1kg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹800</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/gulab-jamun-cake.jpg" />
        <h3>Gulab Jamun cake 1pc</h3>
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
        <img src="./Images/Dishes/gulab-jamun-cake1.jpg" />
        <h3>Gulab Jamun cake 1kg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹1108</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/red-velvet cake.jpg" />
        <h3>Red velvet cake 1/2kg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹540</span>
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
    <h4>Pizza</h4>
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
  <section className="meh" id="cakes">
    <h2 className="ks">KS Bakers</h2>
    <hr className="line" />
    <h4>Regular Cakes</h4>
    <div className="box-container">
      <div className="box">
        <img src="./Images/Dishes/eggless-pineapple.jpg" />
        <h3>Egg-less pineapple cake 1kg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹704</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/pineapple.jpg" />
        <h3>Pineapple cake 1kg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹638</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/blackforest.jpg" />
        <h3>Black Forest 1kg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹688</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/eggless-buterscotch.jpg" />
        <h3>Egg-less Buterscotch 1kg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹720</span>
        <br />
        <a href="#" className="btn">
          Add to cart
        </a>
      </div>
      <div className="box">
        <img src="./Images/Dishes/egg-less blackforest.JPG" />
        <h3>Egg less blackforest 1kg</h3>
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
        <img src="./Images/Dishes/butter-scotch.jpg" />
        <h3>Butter Scotch cake 1kg</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₹660</span>
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
