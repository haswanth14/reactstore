//packages
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//utils
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

//config
dotenv.config()
const port = process.env.PORT || 5000;

connectDB()

//creating express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

//routes
app.use("/api/users", userRoutes);
 
//listen
app.listen(port, () => console.log(`Server running on port ${port}`))