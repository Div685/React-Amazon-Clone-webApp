import React from "react";
import "././Home.css";
import Product from "../products/Product";
// import Product from "./products/Prouduct";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt="banner"
      />

      {/* Product Id, title, price , rating, image */}
      <div className="home__row">
        <Product
          id="123"
          title="The lean Startup. How constant innovation create Readly Successfull Business Park"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />

        <Product
          id="123"
          title="The lean Startup. How constant innovation create Readly Successfull Business Park"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123"
          title="The lean Startup. How constant innovation create Readly Successfull Business Park"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />

        <Product
          id="123"
          title="The lean Startup. How constant innovation create Readly Successfull Business Park"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />

        <Product
          id="123"
          title="The lean Startup. How constant innovation create Readly Successfull Business Park"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123"
          title="The lean Startup. How constant innovation create Readly Successfull Business Park"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
