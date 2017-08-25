$(document).ready(function() {
    // au chargement de la page on affiche le form de connexion
    $('main').load('/login.html');

    // à afficher quand l'utilisateur demande à créer un compte depuis le formulaire de connexion
    $('main').on('click', '#go-to-register', function(e){
        e.preventDefault();
        $('main').load('/register.html');
    });

    $('main').on('click', '#go-to-login', function(e){
        e.preventDefault();
        $('main').load('/login.html');
    });

    // à afficher quand l'utilisateur demande à créer un compte depuis le formulaire de connexion
    $('main').load('/register.html');

    // récupération des données POST pour envoi au controller
    $('main').on('click', '#submit-register', (function (event) {
        event.preventDefault();

        // // vérification des champs
        let form = $('main').find('#form-register');
        let login = form.find('[name=login]').val();
        let pwd = form.find('[name=pwd]').val();

        if (login === "" || login === undefined || pwd === "" || pwd === undefined) {

        } else {
                $.ajax({
                contentType: "application/json; charset=UTF-8",
                method: 'POST',
                url: "/v1/users",
                data: JSON.stringify({
                    login: login,
                    pwd: pwd
                })
            })
                .done(function(res) {
                    console.log(res);
                    console.log('coucou ca marche dans done !');
                })
                .fail(function (error) {
                    console.log(error);
                });
        }
    }));
});
