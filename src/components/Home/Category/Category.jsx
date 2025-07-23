import "./Category.scss";

import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category" id="category">
      <div className="categories">
        {categories.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img src={item.image_url} alt={item.title || "category division"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
