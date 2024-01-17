export class S3Uploader {
  constructor(private bucket: string) {}

  async upload(filename: string) {
    // upload to s31

    console.log(`Uploading ${filename} to s3... in ${this.bucket}`);
    return true;
  }
}
