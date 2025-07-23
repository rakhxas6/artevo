import { useContext } from "react";
import { Context } from "../../../utils/context";
import Products from "../../Products/Products";

const RelatedProducts = ({ categoryId, productId }) => {
  const { products } = useContext(Context);

  // Filter related products: same category, excluding the current one
  const related = products.filter(
    (product) =>
      product.category_id === Number(categoryId) &&
      product.id !== Number(productId)
  );

  return (
    <div className="related-products">
      <Products headingText="Related Products" products={related} />
    </div>
  );
};

export default RelatedProducts;
