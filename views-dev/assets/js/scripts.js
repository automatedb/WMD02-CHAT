
// à afficher quand l'utilisateur demande à créer un compte depuis le formulaire de connexion
$('main').load('/register.html');

// récupération des données POST pour envoi au controller
$('main').on('submit', $('#submit-register'), (function (event) {
    // vérification des champs
    let form = $('main').find('#form-register');
    let login = form.find('[name=login]').val();
    let pwd = form.find('[name=pwd]').val();

    if (login === "" || login === undefined || pwd === "" || pwd === undefined) {
        event.preventDefault();
    } else {
        $.ajax({
            contentType: "application/json; charset=UTF-8",
            method: 'POST',
            url: "/v1/users",
            data: JSON.stringify({
                login: login,
                pwd: pwd
            })
        }).done(function (test) {
            console.log('coucou ca marche !');
        }).fail(function (error) {
            console.log(error);
        });
        event.preventDefault();
    }
}));
