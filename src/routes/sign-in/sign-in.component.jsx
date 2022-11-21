import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { Routes, Route } from "react-router-dom";

const SignIn = () => {
  return (
    <Routes>
      <Route index element={<SignInForm />} />
    </Routes>
  );
};

export default SignIn;
