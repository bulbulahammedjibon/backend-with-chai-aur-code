// require("dotenv").config({path: './env'});
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from './app.js'

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000)
        console.log(`server is running at port ${process.env.PORT}`)
    })
    .catch((error) => {
        console.log("MONGO DB connection Failed !!", error);
    })
















/*
import express from "express";
const app = express();


// function connectDB(){}
// connectDB()
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        app.on("error", () => {
            console.log("ERROR", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on PORT ${process.env.PORT}`)
        })
    }
    catch (error) {
        console.error("Error", error);
        throw err
    }
})()
    */