import { useState, useContext } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import "./Search.scss";
import { Context } from "../../../utils/context";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { products } = useContext(Context);

  // Filter products based on query
  const filteredProducts =
    query.trim().length > 0
      ? products.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>

      <div className="search-result-content">
        <div className="search-results">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="search-results-item"
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="img-container">
                <img
                  src={item.image_url || "/placeholder.jpg"}
                  alt={item.title}
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.title}</span>
                <span className="desc">{item.desc?.slice(0, 80)}...</span>
              </div>
            </div>
          ))}

          {query && filteredProducts.length === 0 && (
            <p className="no-results">No matching products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
