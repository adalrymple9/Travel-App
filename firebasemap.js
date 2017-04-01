// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBZaab116VD-AjG6tSHK2kVubyF527bqFo",
    authDomain: "travel-app-ucf.firebaseapp.com",
    databaseURL: "https://travel-app-ucf.firebaseio.com",
    projectId: "travel-app-ucf",
    storageBucket: "travel-app-ucf.appspot.com",
    messagingSenderId: "1090757464708"
  };
  firebase.initializeApp(config);

  /*Create an option to store Travel App searches into Firebase for later reference. This is just a Wishlist
  * item that may become a final product feature. If it is to work, searches must be linked to Firebase on
  * client request and be available for later reference based on email address.*/
