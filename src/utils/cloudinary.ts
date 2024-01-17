export class ClUploader {
  constructor(private bucket: string) {}

  async upload(filename: string) {
    // upload to cloudinary

    console.log(`Uploading ${filename} to cloudinary... in ${this.bucket}`);
    return true;
  }
}
