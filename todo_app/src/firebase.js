// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBen_5o8HhZzd_9c6Zv7gyhooOcsEEJf6s",
    authDomain: "todo-app-cp-a1d00.firebaseapp.com",
    databaseURL: "https://todo-app-cp-a1d00.firebaseio.com",
    projectId: "todo-app-cp-a1d00",
    storageBucket: "todo-app-cp-a1d00.appspot.com",
    messagingSenderId: "527137309566",
    appId: "1:527137309566:web:157bc0e2af45d8f629e92f",
    measurementId: "G-PLLMKXZ1WZ"
  
  });

  const db = firebaseApp.firestore();
  
  export  default db;