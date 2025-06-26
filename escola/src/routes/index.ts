import { Router } from 'express';
import { PessoaController } from '../controllers/PessoaController';
import { EstudanteController } from '../controllers/EstudanteController';
import { DisciplinaController } from '../controllers/DisciplinaController';

const router = Router();

// Rotas Pessoa
router.post('/pessoas', PessoaController.create);
router.get('/pessoas', PessoaController.list);
router.delete('/pessoas/:id', PessoaController.delete);
router.put('/pessoas/:id', PessoaController.update);

// Rotas Estudante
router.post('/estudantes', EstudanteController.create);
router.get('/estudantes', EstudanteController.list);
router.delete('/estudantes/:id', EstudanteController.delete);
router.put('/estudantes/:id', EstudanteController.update);

// Rotas Disciplina
router.post('/disciplinas', DisciplinaController.create);
router.get('/disciplinas', DisciplinaController.list);
router.delete('/disciplinas/:id', DisciplinaController.delete);
router.put('/disciplinas/:id', DisciplinaController.update);

export default router;
