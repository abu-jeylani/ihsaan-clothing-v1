import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const navigateToSeeAllProduct = () => {
    navigate("/shop/" + title);
  };
  return (
    <main>
      <Link id="title" to={title}>
        {title.toUpperCase()}
      </Link>
      <div className="category-preview-container">
        {products
          .filter((_, idx) => idx < 3)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        {products.length > 3 ? (
          <span className="see-all-link" onClick={navigateToSeeAllProduct}>
            SEE MORE {title.toUpperCase()} &#10140;
          </span>
        ) : (
          ""
        )}
      </div>
    </main>
  );
};

export default CategoryPreview;
