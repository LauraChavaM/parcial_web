const express = require("express");
const router = express.Router();
const notasController = require("../controller/notasController");

router.get("/", notasController.getNotas);
router.post("/addNotas", notasController.addNotas);
router.post("/:id", notasController.updateNotas);

module.exports = router;