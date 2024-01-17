import { Request, Response } from "express";

import { clUploader } from "../utils/cloudinary";

export const fileController = {
  upload: async (req: Request, res: Response) => {
    // Upload file to S3

    // await s3Uploader.upload("test.mp4");
    await clUploader.upload("test.mp4");
    res.json({ message: "Hello World!!" });
  },
};
