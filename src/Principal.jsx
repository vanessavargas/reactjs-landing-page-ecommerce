import React from "react";

import BlackFriday from "./assets/img/black-friday.svg";
import Emphasis from "./components/Emphasis";
import Footer from "./components/Footer";
import ListProducts from "./components/ListProducts";
import Menu from "./components/Menu";
import Newsletter from "./components/Newsletter";
import Slider from "./components/Slider";
import TypeProducts from "./components/TypeProducts";

export default function Principal() {
  return (
    <>
      <div className="bg-light">
        <Emphasis />
        <Menu />
      </div>
      <Slider />
      <TypeProducts />

      <div className="bloco-post">
        <div className="post1">
          <img src={BlackFriday} alt="banner Black Friday" />
        </div>
        
        <div className="post2">
          <p>
            Redecore e renove sua casa com as ofertas que preparamos para você!
          </p>
        </div>
      </div>

      <ListProducts />
      <Newsletter />              
      <Footer />              
    </>
  )
}
