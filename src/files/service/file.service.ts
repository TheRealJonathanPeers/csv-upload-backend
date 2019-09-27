import { Injectable } from '@nestjs/common';

@Injectable()
export class FileService {

  uploadFile(file: File) {

  }

  async getAllFiles() {
    return new Promise(() => {

    });
  }
}
