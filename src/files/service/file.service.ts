import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { fileOptions } from '../config/file-config';

/**
 * @class FileService handles all file related functionality
 *
 * @author Jonathan Peers
 */
@Injectable()
export class FileService {

  /**
   * @method saveFile will save a file coming from the Controller
   * @param file is the file that needs to be saved
   *
   * @returns if successful: Promise<File[]>, else Error;
   *
   * @author Jonathan Peers
   */
  async saveFile(file: File): Promise<string> {
    // console.log(JSON.stringify(file));
    // return new Promise(() => {
    //   fs.readdir();
    // });
    return new Promise(() => '');
  }

  /**
   * @method readFiles reads all files from a certain directory where the files are saved
   *
   * @returns if successful: Promise<File[]>, else Error;
   *
   * @author Jonathan Peers
   */
  async readFiles(): Promise<[]> {
    // reads all the present filenames in the given dir and converts them to json
    fs.readdirSync(fileOptions.dest).forEach(file => {
      console.log(file);
    });

    return new Promise(() => []);
  }
}
