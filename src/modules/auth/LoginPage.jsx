import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import { loginUser } from "../../services/authService";
import "./LoginPage.css";

import {
  Users,
  Wallet,
  BarChart3,
  ShieldCheck
} from "lucide-react";

function LoginPage() {
const navigate = useNavigate();

const { login } = useContext(AuthContext);

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await loginUser(
      username,
      password
    );

    await login(
      data.access_token,
      data.refresh_token
    );

    navigate("/dashboard");

  } catch (error) {

    console.log(error);

    alert("Login Failed");

  }
};

return (
  <div className="login-page">

    <div className="login-left">

      <div className="brand">

        <h1>
          Enterprise <span>HRMS</span>
        </h1>

        <p>
          Modern Workforce Management Platform
        </p>

      </div>

      <div className="welcome">
        

        <h2>Manage Your Workforce.</h2>

        <p>
          Everything you need to manage employees,
          payroll, attendance, leave, recruitment,
          and performance from one secure platform.
        </p>

        <div className="feature">

          <span>
            <Users size={28} />
          </span>

          <div>

            <h4>Employee Management</h4>

            <p>Manage employee records with ease.</p>

          </div>

        </div>

        <div className="feature">

          <span>
            <Wallet size={28} />
          </span>

          <div>

            <h4>Payroll</h4>

            <p>Generate payroll and salary slips.</p>

          </div>

        </div>

        <div className="feature">

          <span>
            <BarChart3 size={28} />
          </span>

          <div>

            <h4>Reports</h4>

            <p>View analytics and HR insights.</p>

          </div>

        </div>

      </div>

    </div>

    <div className="login-right">

      <div className="login-card">

        <div className="lock-icon">
          <ShieldCheck size={42} />
        </div>

        <h1 className="login-title">
          Sign in to HRMS
        </h1>

        <p className="login-subtitle">
          Enter your credentials to access your account
        </p>

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="login-btn"
          >
            Sign In
          </button>

        </form>
        <div className="login-footer">
          © 2026 Enterprise HRMS
        </div>

      </div>

    </div>

  </div>
);
}

export default LoginPage;
