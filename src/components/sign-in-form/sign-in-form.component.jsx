import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button } from "react-bootstrap";

import FormInput from "../form-input/form-input.component";
import { emailSignInStart } from "../../store/user/user.action";
import { LoadPage } from "../load-page/load-page.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
      navigate("/");
    } catch (error) {
      alert(
        "user sign in failed due to bad comboniation of email and password"
      );
      console.log("user sign in failed", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const navigateToSignUp = () => navigate("/sign-up");

  return (
    <Fragment>
      <LoadPage>
        <div className="sign-in-container">
          <form onSubmit={handleSubmit}>
            <h6>Sign in with your email and password</h6>
            <FormInput
              label="Email"
              type="email"
              required
              onChange={handleChange}
              name="email"
              value={email}
            />
            <FormInput
              label="Password"
              type="password"
              required
              onChange={handleChange}
              name="password"
              value={password}
            />
            <div className="button-container">
              <Button type="submit" variant="dark">
                Sign In
              </Button>
            </div>
            <div id="sign-up-container">
              <span> DON'T HAVE AN ACCOUNT? </span>
              <span
                id="sign-up-button"
                variant="link"
                onClick={navigateToSignUp}
              >
                SIGN UP
              </span>
            </div>
          </form>
          <div className=""></div>
        </div>
      </LoadPage>
    </Fragment>
  );
};

export default SignInForm;
