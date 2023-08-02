var firebaseConfig = {
      apiKey: "AIzaSyAN3Zk9CJgJP7mRbe0O-qjVJBJOo25eZe8",
      authDomain: "lets-chat-web-app-1241d.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-1241d-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-1241d",
      storageBucket: "lets-chat-web-app-1241d.appspot.com",
      messagingSenderId: "135389330700",
      appId: "1:135389330700:web:173b3c21e36f2b31c39d29"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
      }