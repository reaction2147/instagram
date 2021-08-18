const config = {
        apiKey: "AIzaSyDpPbLWV1rBIp_TJmr4u09Fzl6qFFI8puE",
        authDomain: "instagram-83698.firebaseapp.com",
        projectId: "instagram-83698",
        storageBucket: "instagram-83698.appspot.com",
        messagingSenderId: "796147612831",
        appId: "1:796147612831:web:6a74314f64964613a836aa"
      };


const firebase = window.firebase.intialize(config);
const { FieldValue } = window.firebase.firestore;

export {firebase, FieldValue}