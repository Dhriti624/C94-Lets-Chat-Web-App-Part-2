
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyAQKwrw1jwlNMV6fWc5b6sOnKs786jeAeA",
  authDomain: "kwitter-practice-bb3df.firebaseapp.com",
  databaseURL:"https://kwitter-practice-bb3df-default-rtdb.firebaseio.com/",
  projectId: "kwitter-practice-bb3df",
  storageBucket: "kwitter-practice-bb3df.appspot.com",
  messagingSenderId: "61530266876",
  appId: "1:61530266876:web:fc5cf4aaf7abbf90148b79"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addRoom()
{
    addRoom = document.getElementById("add room").value;
    firebase.database().ref("/").child(add room).update({
        purpose : "adding room"
    });
}

function logout()
{
    logout = document.getElementById("logout").value;
    firebase.database().ref("/").child(logout).update({
        purpose : "logging out"
    });
}