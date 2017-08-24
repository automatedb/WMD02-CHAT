// au chargement de la page on affiche le form de connexion
$('main').load('/login.html');



// à afficher quand l'utilisateur demande à créer un compte depuis le formulaire de connexion
$('main').on('click', '#go-to-register', function(e){
    e.preventDefault();
    $('main').load('/register.html');
});

