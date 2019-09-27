import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileOptions } from '../config/file-config';
import { ApiOkResponse } from '@nestjs/swagger';
import { FileService } from '../service/file.service';

@Controller('files')
export class FilesController {

  constructor(private fs: FileService) {
  }

  @Get()
  @ApiOkResponse({ type: [[]] })
  // @ApiBadRequestResponse({ description: }) todo: error handling mutler opzoeken
  async getFiles(): Promise<[]> {
    return (await this.fs.readFiles());
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', fileOptions))
  @ApiOkResponse({ type: [String] })
  // @ApiBadRequestResponse({ description: }) todo: error handling mutler opzoeken
  async uploadFile(@UploadedFile() file): Promise<string> {
    console.log(file);
    this.fs.saveFile(file);
    return new Promise<string>(() => '');
  }

}
