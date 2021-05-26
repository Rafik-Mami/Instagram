import firebase from 'firebase';

const FirebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyBK0WsR7CPLJwY8PCQy_xKNul5jvIL9nvw",
    authDomain: "instagram-79e73.firebaseapp.com",
    databaseURL: "https://instagram-79e73-default-rtdb.firebaseio.com",
    projectId: "instagram-79e73",
    storageBucket: "instagram-79e73.appspot.com",
    messagingSenderId: "222827560500",
    appId: "1:222827560500:web:6e8cdbffcb8341d1f55461",
    measurementId: "G-VR1J8S8ZJM"
});

const db = FirebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };