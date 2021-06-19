import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
import userRouter from "./routes/users.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);
app.use("/user", userRouter);
dotenv.config();


const PORT = process.env.PORT || 7000


mongoose.connect(process.env.con_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(() => app.listen(PORT, () => console.log(`Connected at port ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);