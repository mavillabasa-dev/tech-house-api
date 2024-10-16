import { Router } from 'express';
import { addTodo, getAllTask, removeTodo } from '../controllers/getTask';

const router = Router();

router.get('/', getAllTask);
router.post('/', addTodo);
router.delete('/:id', removeTodo);


export default router;
