import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { clearCart } from "../../store/cart/cart.action";

import Spinner from "../../components/spinner/spinner.component";

import "./confirmation.styles.scss";

const OrderConfirmation = () => {
  const confirmationNumber = Math.floor(Math.random() * 1000000000);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [isLoading]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearCart());
      navigate("/");
    }, 2000);
  }, [navigate, dispatch]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="order-confirmation-container">
          <div>Order Confirmation: {confirmationNumber}</div>
          <br></br>
          <div className="thank-you-container">Thank You!</div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
