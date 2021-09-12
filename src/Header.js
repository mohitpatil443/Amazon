import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          alt="amazon-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_search_text" type="text"></input>
        <SearchIcon className="header_search_icon"></SearchIcon>
      </div>

      <div className="header_nav">
        <Link to="/login">
          <div className="header_nav_opt">
            <span className="header_nav_opt_one">Hello, Guest</span>
            <span className="header_nav_opt_two">Sign In</span>
          </div>
        </Link>
        <div className="header_nav_opt">
          <span className="header_nav_opt_one">Returns</span>
          <span className="header_nav_opt_two">& Orders</span>
        </div>
        <div className="header_nav_opt">
          <span className="header_nav_opt_one">Your</span>
          <span className="header_nav_opt_two">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header_basket">
          <ShoppingBasketIcon className="header_basket_icon"></ShoppingBasketIcon>
          <span className="header_basket_cnt">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
