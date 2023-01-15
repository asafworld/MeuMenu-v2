import React from 'react';
import menuContext from "../../ContextAPI/MenuContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../../Images/forksAndKnifes.png';
import './Register.css';

function Register() {
  const {
    email,
    setEmail,
    password,
    setPass,
    username,
    setUser } = React.useContext(menuContext);

  return(
    <article className="register-page">
      <section className="register-welcome-section">
        <img
          src={ logo }
          alt="forks and knifes"
          className="register-logo"
        />
        <h4>Uma casa para os seus menus!</h4>
      </section>
      <section className="register-form-section">
        <form>
          <Form.Group className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Usuário</span>
            <Form.Control
              type="text"
              className="form-control register-username-input"
              placeholder="meuUsuário"
              value={ username }
              onChange={ ({ target }) => setUser(target.value)}
            />
          </Form.Group>
          <Form.Group className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">e-Mail</span>
            <Form.Control
              type="text"
              className="form-control register-email-input"
              placeholder="seu-email@email.com"
              value={ email }
              onChange={ ({ target }) => setEmail(target.value)}
            />
          </Form.Group>
          <Form.Group className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Senha</span>
            <Form.Control
              type="password"
              className="form-control register-password-input"
              placeholder="******"
              value={ password }
              onChange={ ({ target }) => setPass(target.value)}
            />
          </Form.Group>
          <Button
            type="submit"
            className="register-button"
          >
            Registre-se
          </Button>
        </form>
      </section>
      <section className="register-instructions-section">
        <ul>
          <li>
            Nome de usuário deve conter no mín. 5 letras!
          </li>
          <li>
            Senha de mín. de 6 caracteres, 1 letra maiúscula e 1 número!
          </li>
        </ul>
      </section>
    </article>
  )
}

export default Register;
