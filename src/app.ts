import express from "express";

import { FileController } from "./controllers/file.controller";
import { ClUploader } from "./utils/cloudinary";
import { S3Uploader } from "./utils/s3-uploader";

const app = express();

app.get("/", (req, res) => {
  const uploaderStr = req.query.uploader;

  if (uploaderStr === "s3") {
    const uploader = new S3Uploader("posts");

    new FileController(uploader).upload(req, res);
    return;
  } else if (uploaderStr === "cloudinary") {
    const uploader = new ClUploader("communities");
    new FileController(uploader).upload(req, res);
    return;
  } else {
    res.status(400).json({ message: "Invalid uploader" });
    return;
  }
});

export default app;
