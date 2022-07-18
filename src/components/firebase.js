import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // Acrescentei

const firebaseConfig = {
  apiKey: "AIzaSyCDe5zZwGA9UbOhtfzE1vFMLJy-nDkz8aA",
  authDomain: "app-login-7114b.firebaseapp.com",
  projectId: "app-login-7114b",
  storageBucket: "app-login-7114b.appspot.com",
  messagingSenderId: "373345470547",
  appId: "1:373345470547:web:0c3826aebf0de6c87f9ea6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Acrescentei