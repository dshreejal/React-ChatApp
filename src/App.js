import React from "react";
import Main from "./components/Main";
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Error from "./components/Error";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <Main user={user} /> : <Error />}
    </div>
  );
}

export default App;
