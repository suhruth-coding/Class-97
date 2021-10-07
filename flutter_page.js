// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBO8JYckq4jijTBEmB6YKbaipRzH2WKjt4",
      authDomain: "flutter-48565.firebaseapp.com",
      databaseURL: "https://flutter-48565-default-rtdb.firebaseio.com",
      projectId: "flutter-48565",
      storageBucket: "flutter-48565.appspot.com",
      messagingSenderId: "217029196214",
      appId: "1:217029196214:web:b695d2dd44c12f714aa917"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_tag = "<h4>" + name + "<img class="user_tick" src="tick.png"></h4>";
         message_tag = "<h4 class="message_h4">" + message + "</h4>";
         like_button = "<button class="btn btn-warning" id="+firebase_message_id+" value="+like+" onclick="updateLike(this.id)">";
         span_tag = "<span class="glyphicon glyphicon-thumbs-up">"+Like+"</span></button><hr>";
         row = name_tag + message_tag + like_button + span_tag;
         document.getElementById("output").innerHTML = "row"
            } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = "";     
}

function updateLike(message_id){
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("flutter.html");
}