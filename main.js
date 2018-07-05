//Initialize firebase
var config = {
    apiKey: "AIzaSyB_Z-ejguSSoBFT0XjF0l8V1k-giaFWTa8",
    authDomain: "form-management.firebaseapp.com",
    databaseURL: "https://form-management.firebaseio.com",
    projectId: "form-management",
    storageBucket: "form-management.appspot.com",
    messagingSenderId: "686582432325"
  };
  firebase.initializeApp(config);

  //Reference messages collection
  var messagesRef=firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

//Submit form
function submitForm(e){
 e.preventDefault();

//Get values
var name=getInputVal('name');
var email=getInputVal('email');
var phone_number=getInputVal('phone_number');
var Institution=getInputVal('Institution');
var Payment=getInputVal('Payment');
var HelpRequired=getInputVal('HelpRequired'); 

//Save message
saveMessage(name,email,phone_number,Institution,Payment,HelpRequired);

//Show alert
document.querySelector('.alert').style.display='block';

//Hide alert after 3 seconds
setTimeout(function(){
	document.querySelector('.alert').style.display='none';
},3000);

//Clear form
document.getElementById('contactForm').reset();
 }
//Function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}
 
//Save message to firebase
function saveMessage(name,email,phone_number,Institution,Payment,HelpRequired){
	var newMessageRef=messagesRef.push();
	newMessageRef.set({
		Name: name,
		EMail: email,
		PhoneNumber: phone_number,
		Institution: Institution,
		PaymentMode: Payment,
		HelpRequired: HelpRequired
	});
}

