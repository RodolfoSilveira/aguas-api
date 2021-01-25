import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', upload.single('photo'), UsersController.store);

export default usersRouter;
