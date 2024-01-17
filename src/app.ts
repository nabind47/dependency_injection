import express from "express";
import { fileController } from "./controllers/file.controller";

const app = express();

app.get("/", fileController.upload);

export default app;
