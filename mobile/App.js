import React from 'react';
import Routes from './src/routes'
import { StatusBar, YellowBox } from 'react-native'

<<<<<<< HEAD

=======
>>>>>>> 9e1eee04ada0c093652411370d7148cbd7996231
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
}

