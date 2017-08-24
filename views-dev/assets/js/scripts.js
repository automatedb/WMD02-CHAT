
// à afficher quand l'utilisateur demande à créer un compte depuis le formulaire de connexion
$('main').load('/register.html');

// récupération des données POST pour envoi au controller
$('main').on('submit', $('#submit-register'), (function (event) {
    // vérification des champs
    let login = $(this).find('[name=login]').val();
    let pwd = $(this).find('[name=pwd]').val();

    if (login === "" || login === undefined || pwd === "" || pwd === undefined) {
        event.preventDefault();
    } else {
        $.ajax({
            method: 'POST',
            url: "/v1/users",
            data: {
                login: login,
                pwd: pwd
            }
        }).done(function (test) {
            console.log('coucou ca marche !');
        }).fail(function (error) {
            console.log(error);
        });
        event.preventDefault();
    }
}));
