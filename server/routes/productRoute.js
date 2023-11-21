import express from 'express';
const router = express.Router();
import { getProducts } from '../controllers/productController.js';


router.get('/get',getProducts);



export default router;