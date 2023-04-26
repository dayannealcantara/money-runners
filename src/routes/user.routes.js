import express from 'express';
import mongoose from 'mongoose';
import Busboy from 'busboy';
import bcrypt from 'bcrypt';
import moment from 'moment';

import aws from '../services/aws.js';
import pagarme from '../services/pagarme.js';

const router = express.Router();

router.post('/', async (req, res) => {
  var busboy = new Busboy({ headers: req.headers });
  busboy.on('finish', async () => {
    console.log(req.body);

    try {
      // UPLOAD ALL FILES
      let errors = [];
      const userId = mongoose.Types.ObjectId();
      let photo = '';

      if (req.files) {
        const file = req.files.photo;

        const nameParts = file.name.split('.');
        const fileName = `${userId}.${nameParts[nameParts.length - 1]}`;
        photo = `users/${fileName}`;

        const response = await aws.uploadToS3(
          file,
          photo
          //, acl = https://docs.aws.amazon.com/pt_br/AmazonS3/latest/dev/acl-overview.html
        );

        if (response.error) {
          errors.push({ error: true, message: response.message.message });
        }
      }

      // SE ERRO, ABORTA TUDO
      if (errors.length > 0) {
        res.json(errors[0]);
        return false;
      }

      // CRIAR SENHA COM BCRYPT
      // const password = await bcrypt.hash(req.body.password, 10);

      // const user = await new User({
      //   ...req.body,
      //   _id: userId,
      //   password,
      //   photo,
      // }).save();
      res.json({message:'upload feito com sucesso'})
      // res.json({ user });
    } catch (err) {
      res.json({ error: true, message: err.message });
    }
  });
  req.pipe(busboy);
});



export default router;
