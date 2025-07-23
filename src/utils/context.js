import { useEffect } from "react";
import { createContext, useState } from "react";
import { supabase } from "./supabaseClient"; 
// import { useLocation } from "react-router-dom";
// import Product from "../components/Products/Product/Product";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  // Fetch categories and products once on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: categoryData, error: categoryError },
          { data: productData, error: productError },
        ] = await Promise.all([
          supabase.from("categories").select("*"),
          supabase.from("products").select("*"),
        ]);

        if (!categoryError) setCategories(categoryData || []);
        if (!productError) setProducts(productData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let count = 0;
    cartItems.map((item) => (count += item.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.map(
      (item) => (subTotal += item.price * item.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);

    if (index !== -1) {
      items[index].quantity += quantity;
    } else {
      const productCopy = {
        ...product,
        quantity,
      };
      items.push(productCopy);
    }

    setCartItems(items);
  };




  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };

 const handleCartProductQuantity = (type, product) => {
   let items = [...cartItems];
   let index = items.findIndex((p) => p.id === product.id);

   if (index === -1) return;

   if (type === "inc") {
     items[index].quantity += 1;
   } else if (type === "dec" && items[index].quantity > 1) {
     items[index].quantity -= 1;
   }

   setCartItems(items);
 };


  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        handleAddToCart,
        cartCount,
        handleRemoveFromCart,
        showCart,
        setShowCart,
        handleCartProductQuantity,
        cartSubTotal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
