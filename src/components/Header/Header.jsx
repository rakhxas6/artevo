import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { TbSearch } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";

import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);
  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset)
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    if (window.scrollY === 0) {
      window.scrollTo({
        top: window.innerHeight * 0.6,
        behavior: "smooth",
      });
    }
  };
  const scrollDownToProducts = () => {
    window.scrollTo({
      top: window.innerHeight * 1.25,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={scrollToBottom}>About</li>
            <li onClick={scrollDown}>Categories</li>
            <li onClick={scrollDownToProducts}>Products</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            ArtEvo.
          </div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <FaRegUser
              style={{
                fontSize: "1.2rem",
              }}
              aria-label="User"
              onClick={() => navigate("/profile")}
            />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {/* by default false hunxa  button click garda on hunxa */}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
