function insereMessage(pseudo, message) {
    $('message-container').prepend(
        '<div class="">
        <p class="text-muted">' + pseudo + '</p>
        <span>' + message + '</span>
        </div>
        </div>');

    // Quand on reçoit un message, on l'insère dans la page
    socket.on('message', function(data) {
        insereMessage(data.pseudo, data.message)
    })

    // Quand un nouveau client se connecte, on affiche l'information
    socket.on('nouveau_client', function(pseudo) {
        $('#zone_chat').prepend('<p><em>' + pseudo + ' a rejoint le Chat !</em></p>');
    })

    // Lorsqu'on envoie le formulaire, on transmet le message et on l'affiche sur la page
    $('#formulaire_chat').submit(function (e) {
        e.preventDefault()        // Permet de bloquer l'envoi "classique" du formulaire
        var message = $('#message').val();
        socket.emit('message', message); // Transmet le message aux autres
        $('#message').val('').focus() // Vide la zone de Chat et remet le focus dessus
    });
}