const { Router } = require("express");
const TurmasController = require("../controllers/TurmasController");

const router = new Router();

router.get("/turmas", TurmasController.getTurmas);

module.exports = router;
