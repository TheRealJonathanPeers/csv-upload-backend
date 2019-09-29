import { existsSync, mkdirSync } from 'fs';
import { HttpException, HttpStatus } from '@nestjs/common';
import { extname } from 'path';
import { diskStorage } from 'multer';

export const fileConfig = {
  uploadDir: './uploads',
};

export const fileOptions = {
  // file size limits
  limits: {
    fileSize: 1000000, // max 1 MB
  },

  // mimetypes && encoding types that are allowed to be uploaded
  fileFilter: (req: any, file: any, cb: any) => {
    let correctEncoding = false;
    let correctMimeType = false;

    file.mimetype.match(/\/(csv)$/) ?
      correctMimeType = true :
      cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);

    file.encoding.match(/(7bit)/) ?
      correctEncoding = true :
      cb(new HttpException(`Unsupported encoding type ${file.encoding}`, HttpStatus.BAD_REQUEST), false);

    if (correctEncoding && correctMimeType) {
      cb(null, true);
    }

  },

  storage: diskStorage({
    destination: (req: any, file: any, cb: any) => {
      if (!existsSync(fileConfig.uploadDir)) { // Create directory if doesn't exist
        mkdirSync(fileConfig.uploadDir);
      }
      cb(null, fileConfig.uploadDir); // directory to store files
    },

    // custom filename
    filename: (req: any, file: any, cb: any) => {
      const name = `${new Date(Date.now()).toLocaleString()}${extname(file.originalname)}`;
      cb(null, `${name}`);
    },
  }),

};
