const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema = new schema({
  name: {
        type: String,
        required: [true, "Name field is required!"]
  },
  img: {
    type: String,
    required:[false,'image is required']
  },
  partyName: {
    type: String,
    required:[true,'party name is required']
  },
  votes:Number
}, {
    collection:'parties'
});


const Party = mongoose.model('Party', UserSchema);
module.exports = Party