const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  likeCount: { type: Number, default: 0 },
  location: { type: String, required: true }
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;
