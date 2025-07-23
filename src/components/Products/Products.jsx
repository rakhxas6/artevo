import Product from "./Product/Product";
import "./Products.scss";

const Products = ({ products = [], innerPage, headingText }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="section-heading">{headingText}</div>}
      <div className="products">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((item) => (
            <Product key={item.id} id={item.id} data={item} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
