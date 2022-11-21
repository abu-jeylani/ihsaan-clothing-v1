import { useSelector, useDispatch } from "react-redux";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <tr>
      <td className="imageContainer">
        <img src={`${imageUrl}`} alt={`${name}`} />
      </td>

      <td>{name}</td>
      <td className="arrow" onClick={removeItemHandler}>
        &#10094; &nbsp;
        <span>{quantity} &nbsp;</span>
        <span className="arrow" onClick={addItemHandler}>
          &#10095;
        </span>
      </td>
      <td>${price}</td>
      <td>
        <span className="remove" onClick={clearItemHandler}>
          &#10005;
        </span>
      </td>
    </tr>
  );
};

export default CheckoutItem;
