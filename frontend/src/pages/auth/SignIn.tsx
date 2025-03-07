// import { useSignInMutation } from "@/controller/reducers/auth/authApi";
// import { useDispatch } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";

const SignIn = () => {
  const { next } = useOutletContext<{ next: string }>();
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const [signIn] = useSignInMutation();
  // const payload = { email: "abcd1234", password: "user" };

  const handleLogin = () => {
    navigate(next, { replace: true }); // Redirect after login
  };
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default SignIn;
