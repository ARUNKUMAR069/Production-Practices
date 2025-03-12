













/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();


; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.error("ERROR: Could not start server", err)
            throw err
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })

    }
    catch (err) {
        console.error(err)
        console.error("ERROR: Could not connect to the database", error)
        throw err
    }
})()
    */