import { Request, Response } from "express";

interface IUploader {
  upload: (filename: string) => Promise<boolean>;
}

export class FileController {
  private uploader: IUploader;

  constructor(uploader: IUploader) {
    this.uploader = uploader;
  }

  upload(req: Request, res: Response) {
    // Upload file to S3

    this.uploader.upload("test.mp4");
    res.json({ message: "Hello World!!" });
  }
}
