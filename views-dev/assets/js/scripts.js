

// à afficher quand l'utilisateur demande à créer un compte depuis le formulaire de connexion
$('main').load('/register.html');

//$('main').load('/login.html');

$('main').on('click', '#go-to-login', function(e){
    e.preventDefault();
    $('main').load('/login.html');
});
