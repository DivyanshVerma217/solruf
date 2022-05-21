import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX7l9gqPXAe-7TtEW1bQvZMPlzVwD2aI8",
  authDomain: "solruf-b23fd.firebaseapp.com",
  projectId: "solruf-b23fd",
  storageBucket: "solruf-b23fd.appspot.com",
  messagingSenderId: "398827980884",
  appId: "1:398827980884:web:f1ed49c2990c36934305c1",
  measurementId: "G-NPN0YBF6T6"
};

 if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)

 const storage = firebase.storage()
 const auth = firebase.auth()
 const db = firebase.firestore()
 
 export {auth,db,firebase,storage} 

