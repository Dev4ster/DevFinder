import React from 'react';
import Routes from './Routes';
import 'react-native-gesture-handler';
import SignIn from './Pages/SignIn';
import './Config/Reactotron';

export default function App() {
  const [logged, setLogged] = React.useState(false);

  const login = () => setLogged(!logged);

  return logged ? <Routes /> : <SignIn login={login} />;
}
