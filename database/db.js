import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {
    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-lfsebzf-shard-00-00.zbigrar.mongodb.net:27017,ac-lfsebzf-shard-00-01.zbigrar.mongodb.net:27017,ac-lfsebzf-shard-00-02.zbigrar.mongodb.net:27017/?ssl=true&replicaSet=atlas-ze69lv-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, {useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to database ', error.message);
    }
}

export default Connection;