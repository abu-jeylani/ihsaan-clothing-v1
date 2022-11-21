import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { Button, Table } from "react-bootstrap";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import OrderConfirmation from "../../components/confirmation/confirmation.component";
import LoadPage from "../../components/load-page/load-page.component";

import "./checkout.styles.scss";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigate = useNavigate();

  const navigateToPaymentForm = async () => {
    navigate("/checkout/payment");
  };
  return (
    <LoadPage>
      <Routes>
        <Route
          index
          element={
            <div>
              {cartItems.length > 0 ? (
                <div className="checkout-container">
                  <div className="header">Checked Out Items</div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => {
                        return <CheckoutItem key={item.id} cartItem={item} />;
                      })}
                    </tbody>
                  </Table>
                  <span className="total">Total: ${cartTotal}</span>
                  <Button
                    variant="dark"
                    id="checkout-button"
                    onClick={navigateToPaymentForm}
                  >
                    Order Now
                  </Button>
                </div>
              ) : (
                <div className="no-items">
                  <span>No Items In Cart</span>
                </div>
              )}
            </div>
          }
        />
        <Route path="payment" element={<PaymentForm />} />
        <Route path="confirmation" element={<OrderConfirmation />} />
      </Routes>
    </LoadPage>
  );
};

export default CheckOut;
