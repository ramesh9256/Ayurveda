
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkrCAxLTepa9bTSzaIjLTIwWMo4ttxrHk",
  authDomain: "veda-c997a.firebaseapp.com",
  projectId: "veda-c997a",
  storageBucket: "veda-c997a.firebasestorage.app",
  messagingSenderId: "983281745035",
  appId: "1:983281745035:web:849dc84ea39a4ecde1e88e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)