const DIALOGUE = [
    { user: "Licorne Codeuse", text: "Ahhh, rien de tel qu'une bonne matinée de codage ! Mon nouveau projet est presque terminé. Je suis une génie, mon code est parfait, comme d'habitude." },
    { user: "Lapin Bug", text: "Oh, vraiment ? Parfait, dis-tu ? Hihi, je crois que tu as oublié de fermer cette parenthèse ici... et là-bas aussi !" },
    { user: "Licorne Codeuse", text: "Quoi ?! Mais non, impossible ! Oh non, il y a des erreurs partout ! Comment est-ce possible ?!" },
    { user: "Lapin Bug", text: "Tu m'as sous-estimé, ma chère Licorne. Je suis le Bug, le maître du chaos dans ton monde parfait de lignes de code. Regarde ce que j'ai fait à ta boucle !" },
    { user: "Licorne Codeuse", text: "Mais pourquoi tu fais ça ?! Je veux juste écrire un beau code sans erreur !" },
    { user: "Lapin Bug", text: "Parce que c'est amusant ! Et avoue-le, tu te sentirais perdue sans moi. Qui d'autre te donnerait autant de défis à résoudre ?" },
    { user: "Licorne Codeuse", text: "Tu as peut-être raison... mais je finirai par te corriger, petit lapin ! Je vais traquer chaque bug, ligne par ligne, jusqu'à ce que tu disparaisses pour de bon !" },
    { user: "Lapin Bug", text: "Bonne chance avec ça ! Mais n'oublie pas, là où il y a du code, il y a toujours un petit bug quelque part..." },
    { user: "Licorne Codeuse", text: "On verra bien ! En attendant, je retourne au travail... et cette fois, je suis prête à tout !" }
];

document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('welcomeText').style.display = 'none';
    document.getElementById('startButton').style.display = 'none';

    // Afficher la boîte de dialogue
    document.getElementById('dialogueBox').style.display = 'block';

    // Afficher les images
    document.getElementById('unicornImg').style.display = 'block';
    document.getElementById('rabbitImg').style.display = 'block';

    // Afficher le bouton "Suivant"
    document.getElementById('nextButton').style.display = 'inline-block';

    // Démarrer le dialogue
})