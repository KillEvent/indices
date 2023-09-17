var enigme = prompt("Entrez le nom de l'énigme (par exemple: enigme A, enigme B):");

switch (enigme.toLowerCase()) {
    case "enigme a":
        document.getElementById('reponseA').style.display = 'block';
        break;
    case "enigme b":
        document.getElementById('reponseB').style.display = 'block';
        break;
    // Vous pouvez ajouter d'autres cas pour d'autres énigmes ici
    default:
        alert("Énigme non reconnue. Assurez-vous de taper correctement le nom de l'énigme.");
        break;
}
