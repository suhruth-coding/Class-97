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
    document.getElementById("user_name").innerHTML = "Welecome:" + user_name;

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update(
            { purpose : "Add Room" });
            localStorage.setItem("room_name",room_name);
            window.location = "flutter_page.html"
    }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
            row = "<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)'>#"+ Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
      });});}
      getData();

      function redirecttoRoomName(name){
            localStorage.setItem("room_name",name);
            window.location = "flutter_page.html";
      }

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location.replace("flutter.html");
      }