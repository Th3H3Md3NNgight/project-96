
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

     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
     function addRoom()
     {
       room_name = document.getElementById("room_name").value;
     
       firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
       });
     
         localStorage.setItem("room_name", room_name);
         
         window.location = "kwitter_page.html";
     }
          
     function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}