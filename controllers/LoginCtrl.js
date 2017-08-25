class LoginCtrl {

    postLogin(req, res) {
        console.log(req.body);
        res.redirect('/chat.html');
    }

}
module.exports = LoginCtrl;