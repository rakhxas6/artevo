import { BsCartX } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";

import { useContext } from "react";
import { Context } from "../../utils/context";
import CartItem from "../Cart/CartItem/CartItem";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);
  const navigate = useNavigate();

  const handleReturnToShop = () => {
    setShowCart(false);
    navigate("/");
  };

  const handlePayment = () => {
    setShowCart(false);
    navigate("/payment-pending");
  };

  

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button onClick={handleReturnToShop} className="return-cta">
              RETURN TO SHOP
            </button>
          </div>
        )}

        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="sub-total">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handlePayment}>
                  Checkout
                </button>
              </div>
              
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
