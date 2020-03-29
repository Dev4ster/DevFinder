import React from 'react';
import Routes from './Routes';
import 'react-native-gesture-handler';
import SignIn from './Pages/SignIn';
import './Config/Reactotron';

export default function App() {
  const [log, setLog] = React.useState(false);
  const login = () => setLog(!log);
  return log ? <Routes /> : <SignIn login={login} />;
}
