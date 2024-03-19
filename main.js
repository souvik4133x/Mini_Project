
const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyChfDc45fhJsD3vyI6v2Y5RWoJD2Cvgl3Y",
    authDomain: "miniproject-943b6.firebaseapp.com",
    projectId: "miniproject-943b6",
    storageBucket: "miniproject-943b6.appspot.com",
    messagingSenderId: "904657085177",
    appId: "1:904657085177:web:11160f2d0696c16d91f828",
    measurementId: "G-YXRYD0C76S"
  
});

      
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
   
    
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("You are successfully registered")
            
            console.log(result)
            // ...
        })
        .catch((error) => {
            alert(error.message)
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function

const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 

            alert("You are Signed In")
           
                window.location = "./indexcopy.html";
            
              
           
            console.log(result);
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message)
        });
}






