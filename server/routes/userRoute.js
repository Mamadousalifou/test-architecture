import express from 'express';
const router = express.Router();
import { getUsers,addUser } from '../controllers/userController.js';


router.get('/get',getUsers);
router.post('/add',addUser);

export default router;