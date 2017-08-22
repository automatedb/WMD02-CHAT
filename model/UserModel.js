var UserSchema = new Schema({
    id   : ObjectId,
    login   : { type: String, required: true, unique : true },
    pwd   : { type: String, required: true},
    token   : String
});
module.exports = mongoose.model('User', UserSchema);