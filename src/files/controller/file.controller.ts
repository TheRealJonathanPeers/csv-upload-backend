import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileOptions } from '../config/file-config';
import { FileService } from '../service/file.service';

/**
 * @class FileController handles incoming requests related to files
 *
 * @author Jonathan Peers
 */
@Controller('file')
export class FileController {

  constructor(private fs: FileService) {
  }

  /**
   * @method getFiles looks for all the currently uploaded csv files and returns them in json format
   *
   * @returns 2D array of json objects in the form of a Promise<any[][]> type
   */
  @Get()
  async getAllCSVFiles(): Promise<any[][]> {
    return await this.fs.readAllCSVFiles();
  }

  /**
   * @method uploadFile will save a csv file in a directory and returns it in json format
   *
   * @param file is the intercepted file from the request's body,
   * where @UploadedFile automatically saves the file in a specified directory based on the configuration in object fileOptions
   *
   * @returns array of json objects in the form of a Promise<any[]> type
   */
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', fileOptions))
  async uploadFile(@UploadedFile() file): Promise<any[]> {
    console.log(file);
    return await this.fs.saveFile(file);
  }

}
