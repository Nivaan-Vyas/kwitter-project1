const firebaseConfig = {
      apiKey: "AIzaSyAHw_pZDml5k9sxJM4cmXs-b31MygPAscQ",
      authDomain: "not-copyright-of-twitter.firebaseapp.com",
      databaseURL: "https://not-copyright-of-twitter-default-rtdb.firebaseio.com",
      projectId: "not-copyright-of-twitter",
      storageBucket: "not-copyright-of-twitter.appspot.com",
      messagingSenderId: "202961985451",
      appId: "1:202961985451:web:4ecb5aad4b9d3a29a13cee",
      measurementId: "G-23DF9WHJSP"
    };
    
    
    firebase.initializeApp(firebaseConfig);
   function addRoom(){
      room_name=document.getElementById("room_name").value;      
      firebase.database().ref("/").child("room_name").update({
            purpose:"adding room name"
      });
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
