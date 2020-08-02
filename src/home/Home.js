import React from "react";
import "././Home.css";
import Product from "../products/Product";
// import Product from "./products/Prouduct";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_HO_PVD4778_ILLUMINATE._CB428347184_.jpg"
        //"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/BITS/Launch/1500x600_Hero-Tall_np._CB410403194_.jpg"
        // "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt="banner"
      />

      {/* Product Id, title, price , rating, image */}
      <div className="home__row">
        <Product
          id="123"
          title="HeimVision HM203 Security Camera, 1080P Surveillance WiFi Camera with Night Vision..."
          price={51.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71yKQ6vWgiL._AC_SL1500_.jpg"
        />

        <Product
          id="123"
          title="The lean Startup. How constant innovation create Readly Successfull Business Park"
          price={31.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/419SVFEiGcL._AC_UL200_SR200,200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123"
          title="Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal"
          price={110.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/419SVFEiGcL._AC_UL200_SR200,200_.jpg"
          // "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />

        <Product
          id="123"
          title="The lean Startup. How constant innovation create Readly Successfull Business Park"
          price={11.96}
          rating={3}
          image="https://www.amazon.com/images/I/812MizmMvkL._AC_UY218_.jpg"
          // "https://images-na.ssl-images-amazon.com/images/I/419SVFEiGcL._AC_UL200_SR200,200_.jpg"
          // "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />

        <Product
          id="123"
          title="MSI GL65 Leopard 10SFK-062 15.6 FHD 144Hz 3ms Thin Bezel Gaming Laptop"
          price={1851.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81Mbw6RBtPL._AC._SR360,460.jpg"
          // "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123"
          title="The lean Startup. How constant innovation create Readly Successfull Business Park"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          // "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
