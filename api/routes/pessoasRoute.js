const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.getPessoas);
router.post("/pessoas", PessoaController.criarPessoa);
router.get("/pessoas/:id", PessoaController.getUmaPessoa);
router.put("/pessoas/:id", PessoaController.atualizaPessoa);
router.delete("/pessoas/:id", PessoaController.apagaPessoa);

module.exports = router;
