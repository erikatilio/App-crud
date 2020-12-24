const { Router } = require("express");
const NivelController = require("../controllers/NiveisController");

const router = new Router();

router.get("/niveis", NivelController.getNiveis);

module.exports = router;
