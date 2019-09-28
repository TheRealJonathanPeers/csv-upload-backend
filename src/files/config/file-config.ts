import { existsSync, mkdirSync } from 'fs';
import { HttpException, HttpStatus } from '@nestjs/common';
import { extname } from 'path';
import { diskStorage } from 'multer';

export const fileConfig = {
  uploadDir: './uploads',
};

// todo in config steken
export const fileOptions = {
  // Enable file size limits
  limits: {
    fileSize: 1000000, // max 1 MB
  },

  // Check the mimetypes to allow for upload
  fileFilter: (req: any, file: any, cb: any) => {
    file.mimetype.match(/\/(csv)$/) ?
      cb(null, true) :
      cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
  },

  // Storage properties
  storage: diskStorage({
    // Destination storage path details
    destination: (req: any, file: any, cb: any) => {
      // Create folder if doesn't exist
      if (!existsSync(fileConfig.uploadDir)) {
        mkdirSync(fileConfig.uploadDir);
      }
      cb(null, fileConfig.uploadDir);
    },

    // File modification details
    filename: (req: any, file: any, cb: any) => {
      // Calling the callback passing the random name appended to the original extension name
      cb(null, `${Date.now().toString()}.${extname(file.originalname)}`);
    },
  }),

};
