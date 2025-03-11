import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();


; (async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.error("ERROR: Could not start server", err)
            throw err
        })

    }
    catch (err) {
        console.error(err)
        console.error("ERROR: Could not connect to the database", error)
        throw err
    }
})()