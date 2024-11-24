import { useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add logic to handle login
    auth.login(user);
    navigate("/");
  };
  return (
    <div>
      <label>
        Username:{" "}
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={handleLogin}> Login</button>
      </label>
    </div>
  );
};

export default Login;