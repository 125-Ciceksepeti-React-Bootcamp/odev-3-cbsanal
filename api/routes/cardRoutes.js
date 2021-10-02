const express = require("express");
const cardController = require("../controllers/cardController");

const router = express.Router();

// the url's that axios send the requests
router.get("/allCards", cardController.showAllCards);
router.get("/oneCard/:id", cardController.oneCard);
router.post("/createCard", cardController.createCard);
router.patch("/updateCard/:id", cardController.updateCard);
router.delete("/deleteCard/:id", cardController.deleteCard);

module.exports = router;
