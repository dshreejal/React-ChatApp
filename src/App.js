import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
