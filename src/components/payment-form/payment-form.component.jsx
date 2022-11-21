import { useNavigate } from "react-router-dom";

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

import { Button } from "react-bootstrap";

import LoadPage from "../load-page/load-page.component";

import "./payment-form.styles.scss";

const PaymentForm = () => {
  const navigate = useNavigate();

  const processPayment = () => {
    navigate("/checkout/confirmation");
  };

  return (
    <LoadPage>
      <form>
        <MDBContainer fluid className="py-5 gradient-custom" id="cc-container">
          <div className="header">Enter Credit Card Info</div>
          <MDBRow className="d-flex justify-content-center py-5">
            <MDBCol md="7" lg="5" xl="4">
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBCardBody className="p-4">
                  <MDBRow className="d-flex align-items-center">
                    <MDBCol size="9">
                      <MDBInput
                        label="CARD NUMBER"
                        id="form-input"
                        type="text"
                        placeholder="1234 5678 9012 3457"
                      />
                    </MDBCol>

                    <MDBCol size="9">
                      <MDBInput
                        label="CARDHOLDER'S NAME"
                        id="form-input"
                        type="text"
                        placeholder="CARDHOLDER'S NAME"
                      />
                    </MDBCol>

                    <MDBCol size="6">
                      <MDBInput
                        label="EXPIRATION"
                        id="form-input"
                        type="text"
                        placeholder="MM/YYYY"
                      />
                    </MDBCol>
                    <MDBCol size="3">
                      <MDBInput
                        label="CVV"
                        id="form-input"
                        type="text"
                        placeholder="&#9679;&#9679;&#9679;"
                      />
                    </MDBCol>
                    <MDBCol size="3">
                      <Button
                        variant="dark"
                        id="process-payment-button"
                        onClick={processPayment}
                      >
                        PROCESS PAYMENT
                      </Button>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
    </LoadPage>
  );
};

export default PaymentForm;
