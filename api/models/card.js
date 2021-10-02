const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const CardModel = mongoose.model("CardModel", cardSchema);
module.exports = CardModel;
