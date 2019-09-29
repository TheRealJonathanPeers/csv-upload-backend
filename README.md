<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# CsvUploadBackend

## About
Handles the saving and reading of csv files and returns it in json format to the frontend.

## Installation
After cloning this project dont forget to install the libraries declared in package.json. Use the following command.
```bash
$ npm install
```

## used libraries
- [CSVtoJSON](https://github.com/Keyang/node-csvtojson) to convert csv files to json. 
It should be already present in ```package.json```, but if it's not there you can always install it like this: 
```bash 
$ npm i --save csvtojson 
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

