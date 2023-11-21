import express from 'express';
import "dotenv/config.js";
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoute.js';
import productRoutes from './routes/productRoute.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api/users',userRoutes)
app.use('/api/products',productRoutes)
/**
 *   http://localhost:3001/api/users/get
 * http://localhost:3001/api/users/user/1
 */

app.listen(3001,() => {
       console.log('My server listening on port 3001')
})