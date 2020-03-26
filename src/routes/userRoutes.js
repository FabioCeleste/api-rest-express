import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/', loginRequired, userController.show);
router.delete('/', loginRequired, userController.delete);
router.update('/', loginRequired, userController.update);


router.post('/token', userController.token);

export default router;
