var UserSchema = new Schema({
    login   : { type: String, required: true, unique : true },
    pwd   : { type: String, required: true}
});
module.exports = mongoose.model('User', UserSchema);