import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  const alertToSignIn = () => {
    alert("Sign In in order to add product to cart");
  };
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={`${imageUrl}`} alt="John" />
      </div>
      <p className="product-title">{name}</p>

      <p className="fa fa-facebook">${price}</p>

      {currentUser ? (
        <button id="product-button" onClick={addProductToCart}>
          Add to Cart
        </button>
      ) : (
        <button id="product-button" onClick={alertToSignIn}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
