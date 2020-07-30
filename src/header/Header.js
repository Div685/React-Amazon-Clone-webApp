import React from "react";
import "././Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../services/StateProvider";
import { auth } from "../services/firebase";
// import Icon from '@material-ui/core/Icon'; //
// import { green } from '@material-ui/core/colors';

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if(user){
      auth.signOut();
    }
  };

  //This is for to make responsive
  // const openNav = () => {
  //   document.getElementById("mySidenav").style.width = "250px";
  // };
  
  // const closeNav = () => {
  //   document.getElementById("mySidenav").style.width = "0";
  // };

  return (
    
    <nav className="header">

      <div className="header__first_main_res">
      <div className="header__first">
        
        <input type="checkbox" className="check"/>
        <label for="check" className="checkbtn" >
        {/* <Icon className="fas fa-bars"  className="checkbtnIcon" /> */}
        {/* <Icon className="fa fa-plus-circle" style={{ color: green[500] }} /> */}
        <i className="fas fa-bars" ></i>
        </label>

      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header_logo"
          alt="logo"
        />
      </Link>
      </div>

      <div className="header__second__right">
      
          <Link to={!user && "/login"} className="header__link">
              <div onClick={login} className="header__option">
                <span className="header__optionLineOne"> {user?.email}</span>
                <span className="header__optionLineTwo"> {user ? 'Sign Out' : 'Sign In'}</span>
              </div>
            </Link>
            
            <Link to="/checkout" className="header__link">
          <ShoppingCartIcon />

          <span className="header__optionLineTwo header__basketCount">
                  {basket?.length}
                </span>
                </Link>
      </div>
      </div>

      

      <div className="header__search">
        <input type="text" className="header__searchInput" value="" placeholder="Search Amazon" />

        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello, {user?.email}</span>
            <span className="header__optionLineTwo"> {user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Try</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon />

            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      
     

    </nav>

      
  );
}

export default Header;
