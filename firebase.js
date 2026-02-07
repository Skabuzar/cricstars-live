// Firebase v8 config (simple & stable)

var firebaseConfig = {
  apiKey: "AIzaSyBS9-IlXaoOdnDKaxxvpUr2Fo1YFyfUP78",
  authDomain: "cricstars--12.firebaseapp.com",
  databaseURL: "https://cricstars--12-default-rtdb.firebaseio.com",
  projectId: "cricstars--12",
  storageBucket: "cricstars--12.appspot.com",
  messagingSenderId: "451935240165",
  appId: "1:451935240165:web:3edd4b421e6317b13b390c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Database reference
var db = firebase.database();
