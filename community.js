var firebaseConfig = {
    apiKey: "AIzaSyBhJI6ZyknhC9GT1NN402G12T01sagaLgw",
    authDomain: "incookify.firebaseapp.com",
    projectId: "incookify",
    storageBucket: "incookify.appspot.com",
    messagingSenderId: "897739564921",
    appId: "1:897739564921:web:a7fd99eacd9fb4d376f1a8"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("User");
document.getElementById("welcome_user").innerHTML="𝓦𝓮𝓵𝓬𝓸𝓶𝓮 " + username + " !";


function addRoom(){
      room_name=document.getElementById("room_input").value;
      console.log(room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("Roomname",room_name);
       window.location="community_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function Logout(){
      window.location="index.html";
      localStorage.removeItem("Roomname");
      localStorage.removeItem("User");
}

function redirectToRoomName(room_chosen){
      window.location="kwitter_page.html";
      localStorage.setItem("Roomname", room_chosen);
      console.log("Room name chosen= "+ room_chosen);
}
