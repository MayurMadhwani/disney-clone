import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAycflxQil6i4EfVmH-kq5FKGCtJAByx2s",
    authDomain: "disney-clone-7aa3f.firebaseapp.com",
    projectId: "disney-clone-7aa3f",
    storageBucket: "disney-clone-7aa3f.appspot.com",
    messagingSenderId: "536812804581",
    appId: "1:536812804581:web:52d7b6b2d70bd35590370c"
};

   // Initialize Firebase
   const firebaseApp = initializeApp(firebaseConfig);
   const db = getFirestore(firebaseApp);
   const auth = getAuth(firebaseApp);
   const provider = new GoogleAuthProvider();
   const storage = getStorage(firebaseApp);

   export {auth, provider, storage};
   export default db;
