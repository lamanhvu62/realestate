import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeqGthy9LQYsklbLh-ELQzg7yL4AGg1qE",
  authDomain: "landfinder-95adb.firebaseapp.com",
  projectId: "landfinder-95adb",
  storageBucket: "landfinder-95adb.firebasestorage.app",
  messagingSenderId: "835639781387",
  appId: "1:835639781387:web:044d4f09864820e80bbf0e",
  measurementId: "G-RXPKW5E1BT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
export default app;