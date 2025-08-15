document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "painel.html";
        })
        .catch(error => {
            document.getElementById("error-message").innerText = "Erro: " + error.message;
        });
});
