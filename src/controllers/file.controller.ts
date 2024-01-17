import { Request, Response } from "express";
import { s3Uploader } from "../utils/s3-uploader";

export const fileController = {
  upload: async (req: Request, res: Response) => {
    // Upload file to S3

    await s3Uploader.upload("test.mp4");
    res.json({ message: "Hello World!!" });
  },
};
