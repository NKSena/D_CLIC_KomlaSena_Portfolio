const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const sujet = document.getElementById("sujet").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!prenom || !nom || !sujet || !message) {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    alert("Message envoyé avec succès !");
    form.reset();
});
