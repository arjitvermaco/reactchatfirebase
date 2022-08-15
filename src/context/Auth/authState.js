import { useEffect, useState } from "react";
import AuthContext from "./authContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "../../firebase";


const AuthState = (props) => {
  const [state, setState] = useState(null);
  const [user,setUser] = useState(auth.currentUser);

  useEffect(() => {
    // signUpNewUser('admin@gmail.com','123456')
    // loginUser({ email: "admin@gmail.com", password: "123456" });
    logoutUser();
  }, []);

  const updateAuthState = ()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("user from auth state",user)
        // ...
      } else {
        // User is signed out
        // ...
        console.log("No user found")
        setUser(null)
      }
    });
  }

  const logoutUser = async()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      updateAuthState()
      console.log("Logout success");
      // setUser(null)


    }).catch((error) => {
      // An error happened.
      console.log(error)

    });
  }
  const loginUser = async (user) => {
    await signInWithEmailAndPassword(auth, user.email, user.password)
      .then((user) => {
        console.log(user);
        updateAuthState();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signUpNewUser = async (user) => {
    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });
  };
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
