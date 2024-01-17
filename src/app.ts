import express from "express";
import { fileController } from "./controllers/file.controller";
import { clUploader } from "./utils/cloudinary";

const app = express();

app.get("/", (req, res) =>
  fileController.upload(req, res, { uploader: clUploader })
);

export default app;
