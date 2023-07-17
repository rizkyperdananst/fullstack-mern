// "type": "module",
// kodingan di atas kita simpan di package.json, supaya esx syntax untuk export dan import module

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

// Connection Databse MongoDB
const server = mongoose.connect("mongodb://127.0.0.1:27017/fullstack_mern").then(() => {
     console.log("Database connected");
}).catch((err) => {
     console.log("Database not connected");
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ini agar kita bisa post / update data 
app.use(UserRoute);

app.listen(5000, () => {
     console.log("Server running on port 5000");
})