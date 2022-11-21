import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { Routes, Route } from "react-router-dom";

const SignUp = () => {
  return (
    <Routes>
      <Route index element={<SignUpForm />} />
    </Routes>
  );
};

export default SignUp;
