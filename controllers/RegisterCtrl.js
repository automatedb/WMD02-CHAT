const _ = require('underscore');
const UserService = require('../services/UserService');

class RegisterCtrl {

    postRegister(req, res) {
        if (_.isEmpty(req.body) || (_.isEmpty(req.body.login) || _.isEmpty(req.body.pwd))) {
            res.json({
                message: 'Tous les champs sont requis'
            });
            return;
        }

        let loginValue = req.body.login;
        let pwdValue = req.body.pwd;

        const userService = new UserService();

        userService.register(loginValue, pwdValue).then(
            result => res.json({
                message: 'user_created',
                data: result
            })
        ).catch (e => res.json({
            message: 'unexpected_error'
        }));
    }

}
module.exports = RegisterCtrl;