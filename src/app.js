import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

//app.use is use when need middlewire and configaration 

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,

}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // when data come on url then use this
app.use(express.static("public")) // it is for public folder . example asset favicon etc.
app.use(cookieParser())
export { app };