const Card = require("../models/card");

exports.createCard = async (req, res) => {
  try {
    const newCard = await Card.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        card: newCard,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Problem occured, please try again",
    });
  }
};

exports.showAllCards = async (req, res) => {
  try {
    const allCards = await Card.find();
    res.status(200).json({
      status: "success",
      allCards,
    });
  } catch (err) {
    res.status(404).json({
      status: "Problem occured, please try again",
    });
  }
};

exports.oneCard = async (req, res) => {
  try {
    const card = await Card.find({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      card,
    });
  } catch (err) {
    res.status(404).json({
      status: "Problem occured, please try again",
    });
  }
};

exports.updateCard = async (req, res) => {
  try {
    await Card.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "Problem occured, please try again",
    });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    await Card.findOneAndRemove({ _id: req.params.id });
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "Problem occured, please try again",
    });
  }
};
