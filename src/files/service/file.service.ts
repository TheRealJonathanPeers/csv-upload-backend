import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { fileConfig } from '../config/file-config';
import { detectBufferEncoding } from 'tslint/lib/utils';
import csv = require('csvtojson');

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
   */
  async saveFile(file): Promise<any[]> {
    // the file is already uploaded automatically by this point
    // so we can start parsing it to json
    return await this.parseCSVFile(file.filename);
  }

  /**
   * @method readFiles reads all csv files from a certain directory where they are saved and converts it to json
   *
   * @returns 2D array of json objects in the form of a Promise<any[][]> type
   */
  async readAllCSVFiles(): Promise<any[][]> {
    const allFiles = await fs.readdirSync(fileConfig.uploadDir);

    const parsedFiles = await allFiles.map(
      async fileName => await this.parseCSVFile(fileName), // convert to json
    );

    return Promise.all(parsedFiles);
  }

  /**
   * @method parseCSVFile will parse the csv file based on the given filepath
   * @param fileName is the name of the file which will be appended to path of the csv files
   *
   * @returns array of json objects in the form of a Promise<any[]> type
   */
  private async parseCSVFile(fileName: string): Promise<any[]> {
    const fileLocation = `${fileConfig.uploadDir}/${fileName}`;
    const fileEncoding = detectBufferEncoding(fs.readFileSync(fileLocation));
    // console.log('encoding of file: ' + fileEncoding);

    return await csv({
      delimiter: 'auto', // parses ',' or ';' automatically
    })
      .fromFile(fileLocation, {
        encoding: fileEncoding, // parser will take the file encoding into account
      })
      .on(
        'error', err => console.log(`[fileService]: error while parsing csv to json: ${err}`),
      );
  }
}
