import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABI3xss9OSoN39UTObY84FtXI6hs6udSI",
  authDomain: "portfolio-ef4ca.firebaseapp.com",
  databaseURL: "https://portfolio-ef4ca-default-rtdb.firebaseio.com",
  projectId: "portfolio-ef4ca",
  storageBucket: "portfolio-ef4ca.appspot.com",
  messagingSenderId: "818349437829",
  appId: "1:818349437829:web:0e80278ef4084245564aec",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db




