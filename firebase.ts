import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBFV9Bx2Pe85BwhDud7BSyNv9htmdYc9B4",
    authDomain: "lpreets-dropbox-clone.firebaseapp.com",
    projectId: "lpreets-dropbox-clone",
    storageBucket: "lpreets-dropbox-clone.appspot.com",
    messagingSenderId: "956691259421",
    appId: "1:956691259421:web:a312d2ba829d9c1d8fa6f4"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage }