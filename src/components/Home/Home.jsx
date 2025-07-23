import { useContext } from "react";
import "./Home.scss";

import Category from "./Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, products } = useContext(Context);

  return (
    <>
      <Banner />
      <div className="main-content">
        <div className="layout">
          {categories?.length > 0 && <Category categories={categories} />}
          {products?.length > 0 && (
            <Products products={products} headingText="Popular Products" />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
