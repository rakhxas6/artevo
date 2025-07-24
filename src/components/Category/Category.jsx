import "./Category.scss";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";
import Products from "../Products/Products";

const Category = () => {
  const { id } = useParams(); // Get category id from URL
  const { categories, products } = useContext(Context);

  // Show loading if categories or products not yet loaded
  if (!categories?.length || !products?.length) {
    return <div className="category-main-content">Loading data...</div>;
  }

  const categoryId = Number(id);
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <div className="category-main-content">Category not found.</div>;
  }

  // Filter products belonging to this category
  const filteredProducts = products.filter((p) => p.category_id === categoryId);

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          <h2 className="section-heading">{category.title}</h2>
        </div>
        {filteredProducts.length > 0 ? (
          <Products innerPage={true} products={filteredProducts} />
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Category;
