import {initializeApp} from 'firebase/app';
import 'firebase/auth'

let config = {
  apiKey: "AIzaSyAgcnqNze85kqJV47x_p_ESXZi6NoR4UiY",
  authDomain: "ecolibrishop-54839.firebaseapp.com",
  projectId: "ecolibrishop",
  storageBucket: "ecolibrishop.appspot.com",
  messagingSenderId: "1009380579533",
  appId: "1:1009380579533:web:996b3a270aff76098d7184"
};

const app = initializeApp(config);

// @ts-ignore
const auth = app.auth;
// @ts-ignore
const provider = app.GoogleAuthProvider

export {auth, provider}