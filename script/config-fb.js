// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDVoWWfkfqn95KrUeyAgdwjt4Y8kXXrgy4",
    authDomain: "carneiro-manso.firebaseapp.com",
    projectId: "carneiro-manso",
    storageBucket: "carneiro-manso.firebasestorage.app",
    messagingSenderId: "660697393282",
    appId: "1:660697393282:web:24f8808a9b2c7f72626c9b",
    measurementId: "G-MJ51VVL8RJ"
};

// Inicializa o Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(); // Para Realtime Database
// Ou, se for usar Firestore:
// const db = firebase.firestore();
