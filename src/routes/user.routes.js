import express from 'express';
import mongoose from 'mongoose';
import Busboy from 'busboy';
import bcrypt from 'bcrypt';
import moment from 'moment';
import aws from '../services/aws.js'

const router = express.Router();

router.post('/', async (req, res) => {
  const busboy = new Busboy({ headers: req.headers });

  busboy.on('file', async (fieldname, file, filename, encoding, mimetype) => {
    try {
      const userId = mongoose.Types.ObjectId();
      const nameParts = filename.split('.');
      const fileName = `${userId}.${nameParts[nameParts.length - 1]}`;
      const photo = `user/${fileName}`;

      const response = await aws.uploadToS3(file, photo);

      if (response.error) {
        throw new Error(response.message);
      } else {
        // continue with your code if the file was uploaded successfully
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: true, message: 'Error uploading file.' });
    }
  });

  busboy.on('finish', () => {
    req.pipe(busboy);
  });

  req.on('error', (error) => {
    console.error(error);
    res.status(500).json({ error: true, message: 'Error receiving file.' });
  });
});

export default router;