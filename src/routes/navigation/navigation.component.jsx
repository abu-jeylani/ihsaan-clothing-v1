import { Fragment } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiCloset, BiMenu } from "react-icons/bi";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";
import { clearCart, setIsCartOpen } from "../../store/cart/cart.action";

import "./navigation.styles.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  window.addEventListener("click", async (e) => {
    let elementClicked = e.target.id;
    let linksMenu = document.getElementById("myLinks");
    if (
      elementClicked !== "hamburger-menu-icon" &&
      linksMenu.style.display === "block"
    ) {
      linksMenu.style.display = "none";
    }
    if (
      !(e.target.id === "carticon-container" || e.target.id === "item-count")
    ) {
      dispatch(setIsCartOpen(false));
    }
  });

  const signUserOut = async () => {
    dispatch(signOutStart());
    dispatch(clearCart());
    navigate("/");
  };

  const navMenuClick = () => {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      dispatch(setIsCartOpen(false));
    }
  };

  return (
    <Fragment>
      <div className="topnav">
        <div id="myLinks">
          <Link id="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link id="nav-link" onClick={signUserOut}>
              SIGN OUT
            </Link>
          ) : (
            <Link id="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}
          <Link id="nav-link" to="/checkout">
            Checkout
          </Link>
        </div>
      </div>

      <div className="navigation-container">
        <div className="logo-container">
          <Link to="/">
            <BiCloset className="logo" />
          </Link>
        </div>
        <div className="menu-icon">
          <BiMenu id="hamburger-menu-icon" onClick={navMenuClick} />
        </div>
        <CartIcon />

        {isCartOpen && <CartDropDown />}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
