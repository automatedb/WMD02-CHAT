var UserSchema = new Schema({
    id   : ObjectId,
    login   : { type: String, required: true, unique : true },
    pwd   : String,
    token   : String
});
module.exports = mongoose.model('User', UserSchema);