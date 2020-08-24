import firebase from "firebase"; 
const firebaseConfig = {
     apiKey: "AIzaSyA33ZyPgfpyE4-WFCTkOn34cmfHpjzBOW4",
     authDomain: "tik-tok-clone-5c828.firebaseapp.com",
     databaseURL: "https://tik-tok-clone-5c828.firebaseio.com",
     projectId: "tik-tok-clone-5c828",
     storageBucket: "tik-tok-clone-5c828.appspot.com",
     messagingSenderId: "162480439337",
     appId: "1:162480439337:web:1f46f497018bdb86205c38",
     measurementId: "G-FDKX6W652Y"
   };

   const firebaseApp = 
   firebase.initializeApp(firebaseConfig); {/*  This initialise firebase instance*/}

   const db = firebaseApp.firestore();

   export default db;