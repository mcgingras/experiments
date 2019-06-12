import React from 'react';
import logo from './logo.svg';
import {useSpring, animated} from 'react-spring'
import './App.css';
import Keycloak from 'keycloak-js';

function App() {

  const [props, set, stop] = useSpring(() => ({fontSize: '12px'}))
  set({fontSize: '200px'})

  const kc = {
      url: 'keycloak:8080',
      realm: 'master',
      clientId: 'User-Management'
  }
  const keycloak = Keycloak(kc);
  console.log(keycloak);
  keycloak.login();

  return (
    <div className="App">
    test

    </div>
  );
}

export default App;
