class RegisterCtrl {

    postRegister(req, res) {

        let loginValue = req.body.login;
        let pwdValue = req.body.pwd;

        if (loginValue === "" || loginValue === undefined || pwdValue === "" || pwdValue === undefined) {

            res.redirect('/');

        } else {








        }
    }

}
module.exports = RegisterCtrl;