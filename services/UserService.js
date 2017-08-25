const UserModel = require('../model/UserModel');

class UserService {
    register(login, pwd) {
        return new Promise((resolve, reject) => {
            UserModel.create([
                {
                    login: login,
                    pwd: pwd
                }
            ]).then(
                result => resolve(result)
            ).catch(e => reject(e.message));
        })
    }
}

module.exports = UserService;