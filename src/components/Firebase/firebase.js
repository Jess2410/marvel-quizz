import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9xsRu40mQ4B8DT_U2flFsLxYwEymjgsA",
    authDomain: "marvel-quizz-3b285.firebaseapp.com",
    projectId: "marvel-quizz-3b285",
    storageBucket: "marvel-quizz-3b285.appspot.com",
    messagingSenderId: "50997263243",
    appId: "1:50997263243:web:2aaf1b1ba603f4f8e00d8e"
  };

class Firebase {
    constructor(){
             app.initializeApp(config);
             this.auth = app.auth()
    }
  //inscription
  signupUser = (email,password)=>
    this.auth.createUserWithEmailAndPassword(email,password);

    //Connexion
  loginUser = (email,password)=>
  this.auth.signInWithEmailAndPassword(email,password);

      //Déconnexion
      signoutUser = ()=>
      this.auth.signOut();
  }


export default Firebase;