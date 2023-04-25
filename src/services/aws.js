import { S3Client, CreateBucketCommand, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

export default {
  IAM_USER_KEY: '',
  IAM_USER_SECRET: '',
  BUCKET_NAME: '',
  AWS_REGION: '',
  uploadToS3: function (file, filename, acl = 'public-read') {
    return new Promise(async (resolve, reject) => {
      let IAM_USER_KEY = this.IAM_USER_KEY;
      let IAM_USER_SECRET = this.IAM_USER_SECRET;
      let BUCKET_NAME = this.BUCKET_NAME;
      let AWS_REGION = this.AWS_REGION;

      const s3client = new S3Client({
        region: AWS_REGION,
        credentials: {
          accessKeyId: IAM_USER_KEY,
          secretAccessKey: IAM_USER_SECRET,
        },
      });

      try {
        await s3client.send(new CreateBucketCommand({ Bucket: BUCKET_NAME }));

        const params = {
          Bucket: BUCKET_NAME,
          Key: filename,
          Body: file.data,
          ACL: acl,
        };

        const result = await s3client.send(new PutObjectCommand(params));

        console.log(result);
        return resolve({ error: false, message: result });
      } catch (err) {
        console.log(err);
        return resolve({ error: true, message: err });
      }
    });
  },
  deleteFileS3: function (key) {
    return new Promise(async (resolve, reject) => {
      let IAM_USER_KEY = this.IAM_USER_KEY;
      let IAM_USER_SECRET = this.IAM_USER_SECRET;
      let BUCKET_NAME = this.BUCKET_NAME;
      let AWS_REGION = this.AWS_REGION;

      const s3client = new S3Client({
        region: AWS_REGION,
        credentials: {
          accessKeyId: IAM_USER_KEY,
          secretAccessKey: IAM_USER_SECRET,
        },
      });

      try {
        const result = await s3client.send(new DeleteObjectCommand({ Bucket: BUCKET_NAME, Key: key }));

        console.log(result);
        return resolve({ error: false, message: result });
      } catch (err) {
        console.log(err);
        return resolve({ error: true, message: err });
      }
    });
  },
};

