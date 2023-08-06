import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCqagMOOP9baM9D9oJtabULAdi8haPsnFI",
  authDomain: "c60-project-d32fd.firebaseapp.com",
  databaseURL: "https://c60-project-d32fd-default-rtdb.firebaseio.com",
  projectId: "c60-project-d32fd",
  storageBucket: "c60-project-d32fd.appspot.com",
  messagingSenderId: "341262455569",
  appId: "1:341262455569:web:783ebd8c44ff6f9246b2b0"
};

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.database()