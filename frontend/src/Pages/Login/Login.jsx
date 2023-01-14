import React from "react";
import menuContext from "../../ContextAPI/MenuContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';

function Login() {
  const {
    email,
    setEmail,
    password,
    setPass } = React.useContext(menuContext);

  return(
    <article className="login-page">
      <section className="login-welcome-section">
        <h1>MeuMenu.com</h1>
        <h4>Eficiente como a sua cozinha!</h4>
      </section>
      <section className="login-form-section">
        <form>
          <Form.Group className="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">e-Mail</span>
            <Form.Control
              type="text"
              className="form-control login-email-input"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value)}
            />
          </Form.Group>
          <Form.Group className="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Senha</span>
            <Form.Control
              type="password"
              className="form-control login-password-input"
              value={ password }
              onChange={ ({ target }) => setPass(target.value)}
            />
          </Form.Group>
          <Button type="submit">
            Log-in
          </Button>
        </form>
      </section>
    </article>
  )
}

export default Login;
