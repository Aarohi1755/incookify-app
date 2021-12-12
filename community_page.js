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
    console.log(username);
    room_name=localStorage.getItem("Roomname");
    console.log(room_name);

    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:username,
      message:msg,
      like:0 
      });
       document.getElementById("msg").value = ""; }
    


 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;

// //Start code
console.log(firebase_message_id);
console.log(message_data);
names = message_data['name'];
message = message_data['message'];
like= message_data['like'];

name_with_tag = "<h4> "+ names +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
 row = name_with_tag + message_with_tag +like_button + span_with_tag;
 document.getElementById("output").innerHTML += row;

// //End code
       } });  }); }
 getData();

function Logout(){
      window.location="index.html";
      localStorage.removeItem("Roomname");
      localStorage.removeItem("User");
      
}
function updateLike(message_id) {
 console.log("clicked on like button - " + message_id);
 button_id = message_id;
 likes = document.getElementById(button_id).value;
 updated_likes = Number(likes) + 1;
 console.log(updated_likes);
 firebase.database().ref(room_name).child(message_id).update({
 like : updated_likes 
}); 
}
