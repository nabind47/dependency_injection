import { Request, Response } from "express";

interface IUploader {
  upload: (filename: string) => Promise<boolean>;
}

export class FileController {
  constructor(private uploader: IUploader) {}

  upload(req: Request, res: Response) {
    // Upload file to S3

    this.uploader.upload("test.mp4");
    res.json({ message: "Hello World!!" });
  }
}
