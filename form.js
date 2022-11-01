import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAB4ARhYGt7hMU5-qkZyEPGvjirwLpTJb8",
	authDomain: "bharat-e55e1.firebaseapp.com",
	databaseURL: "https://bharat-e55e1-default-rtdb.firebaseio.com",
	projectId: "bharat-e55e1",
	storageBucket: "bharat-e55e1.appspot.com",
	messagingSenderId: "807564062804",
	appId: "1:807564062804:web:6c386371e2d00e37b7bdc1",
	measurementId: "G-PZ8P3SRC0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

var email = document.getElementById("email");
var password = document.getElementById("password");

createUserWithEmailAndPassword(auth, email, password)


	.then((userCredential) => {
	// Signed in 
	const user = userCredential.user;
	// ...
})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		// ..
	});


// //function signup
// function signup() {

// 	var email = document.getElementById("email");
// 	var password = document.getElementById("password");

// 	const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
// 	promise.catch(e => alert(e.message));

// 	alert("Signed Up");
// }


// //function signin
// function signin() {

// 	var email = document.getElementById("email");
// 	var password = document.getElementById("password");

// 	const promise = auth.signInWithEmailAndPassword(email.value, password.value);
// 	promise.catch(e => alert(e.message));






//function signout
function signout() {

	auth.signout();
	alert("Signed Out");

}



firebase.auth().onAuthStateChanged(function (user) {

	if (user) {

		var email = user.email;
		alert("Active User " + email);

		//Take user to a different or home page

		//is signed in

	} else {

		alert("No Active User");
		//no user is signed in
	}



});


