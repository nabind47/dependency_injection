import { Request, Response } from "express";

interface IUploader {
  upload: (filename: string) => Promise<boolean>;
}

export const fileController = {
  upload: async (
    req: Request,
    res: Response,
    { uploader }: { uploader: IUploader }
  ) => {
    // Upload file to S3

    await uploader.upload("test.mp4");
    res.json({ message: "Hello World!!" });
  },
};
