class User {

        this._id = id;
        this._login = login;
        this._pwd = pwd;
        this._token = token;

    getLogin() {
        return this._login;
    }
    setLogin(arg) {
    	this._login = arg;
    }
    getPwd() {
        return this._pwd;
    }
    setPwd(arg) {
        this._pwd = arg;
    }
    getToken() {
        return this._token;
    }
    setToken(arg) {
    	this._token = arg;
    }
}

module.exports = User;