import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import { useHistory } from "react-router-dom";

const baseUrl = "https://api-nodejs-todolist.herokuapp.com";

const Auth = () => {
  const history = useHistory();
  const [login, setLogin] = useState(true);
  const [error, setError] = useState({});
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitLogin = async () => {
    setIsLoading(true);

    const user = {
      email,
      password,
    };

    try {
      const res = await axios.post(`${baseUrl}/user/login`, user);

      localStorage.setItem("token", res.data.token);

      setName("");
      setEmail("");
      setPassword("");
      setIsError({});
      setError(false);
      setIsLoading(false);

      history.push("/tasks");
    } catch (err) {
      setIsError(true);
      setError(err.response);
      setIsLoading(false);
      setPassword("");
    }
  };

  const submitRegister = () => console.log("Register");

  return (
    <AuthContainer>
      <h3>{login ? "Login" : "Register"}</h3>
      <div>
        {!login && (
          <Input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="submit">
        {isError && (
          <div style={{ marginBottom: "1rem", color: "red" }}>
            {error.status} - {error.data}
          </div>
        )}
        <Button
          variant="primary"
          text={login ? "Login" : "Register"}
          action={login ? submitLogin : submitRegister}
          isLoading={isLoading}
        />
      </div>
      <div className="register-paragraph">
        {login ? (
          <p>
            Belum punya akun? Silahkan{" "}
            <span className="text-btn" onClick={() => setLogin(false)}>
              Daftar
            </span>
          </p>
        ) : (
          <p>
            Sudah punya akun? Silahkan{" "}
            <span className="text-btn" onClick={() => setLogin(true)}>
              Login
            </span>
          </p>
        )}
      </div>
    </AuthContainer>
  );
};

export default Auth;

const AuthContainer = styled.div`
  background-color: white;
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.7rem;

  h3,
  .submit,
  .register-paragraph {
    text-align: center;
    margin-bottom: 0.4rem;
  }

  .register-paragraph {
    font-size: 14px;

    .text-btn {
      color: #57ea4f;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;
