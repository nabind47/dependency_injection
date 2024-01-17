import express from "express";
import { fileController } from "./controllers/file.controller";
import { clUploader } from "./utils/cloudinary";
import { s3Uploader } from "./utils/s3-uploader";

const app = express();

app.get("/", (req, res) => {
  const uploaderStr = req.query.uploader;

  if (uploaderStr === "s3") {
    fileController.upload(req, res, { uploader: s3Uploader });
    return;
  } else if (uploaderStr === "cloudinary") {
    fileController.upload(req, res, { uploader: clUploader });
    return;
  } else {
    res.status(400).json({ message: "Invalid uploader" });
    return;
  }
});

export default app;
