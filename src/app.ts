import express from "express";
import { FileController } from "./controllers/file.controller";
import { clUploader } from "./utils/cloudinary";
import { s3Uploader } from "./utils/s3-uploader";

const app = express();

app.get("/", (req, res) => {
  const uploaderStr = req.query.uploader;

  if (uploaderStr === "s3") {
    new FileController(s3Uploader).upload(req, res);
    return;
  } else if (uploaderStr === "cloudinary") {
    new FileController(clUploader).upload(req, res);
    return;
  } else {
    res.status(400).json({ message: "Invalid uploader" });
    return;
  }
});

export default app;
