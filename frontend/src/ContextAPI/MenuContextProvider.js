import React from "react";
import PropTypes from 'prop-types';
import menuContext from "./MenuContext";

function MenuContextProvider({ children }) {
  const [email, setEmail] = React.useState('');
  const [password, setPass] = React.useState('');
  const [username, setUser] = React.useState('');

  const contextValues = {
    email,
    setEmail,
    password,
    setPass,
    username,
    setUser
  }

  return(
    <menuContext.Provider value={ contextValues }>
      { children }
    </menuContext.Provider>
  )
}

export default MenuContextProvider;

MenuContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
