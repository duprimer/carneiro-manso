





const firebaseConfig = {
   apiKey: "AIzaSyCsVszNhT7S0du1LJYnTJgOa7nFLfk-Bk0",
  authDomain: "carneiro-manso-37f6b.firebaseapp.com",
  projectId: "carneiro-manso-37f6b",
  storageBucket: "carneiro-manso-37f6b.firebasestorage.app",
  messagingSenderId: "46834269805",
  appId: "1:46834269805:web:33daebd3bf318b5f9d0964"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Serviços
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
