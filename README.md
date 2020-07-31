# Nodejs Expressjs Ready-to-use Project Structure
Author - Naren Krishna [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/b3eb80984adc4671988ffb22d6ad83df)](https://www.codacy.com/manual/maitraysuthar/rest-api-nodejs-mongodb?utm_source=github.com&utm_medium=referral&utm_content=maitraysuthar/rest-api-nodejs-mongodb&utm_campaign=Badge_Coverage) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b3eb80984adc4671988ffb22d6ad83df)](https://www.codacy.com/manual/maitraysuthar/rest-api-nodejs-mongodb?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=maitraysuthar/rest-api-nodejs-mongodb&amp;utm_campaign=Badge_Grade) ![Travis (.com)](https://img.shields.io/travis/com/maitraysuthar/rest-api-nodejs-mongodb)

A ready-to-use boilerplate for REST API Development with Node.js, Express


## Getting started


This is a basic API skeleton written in JavaScript ES2015. Very useful to building a RESTful web APIs for your front-end platforms like Android, iOS or JavaScript frameworks (Angular, Reactjs, etc).

This project will run on **NodeJs** using **MongoDB** as database. I had tried to maintain the code structure easy as any beginner can also adopt the flow and start building an API. Project is open for suggestions, Bug reports and pull requests.


## Software Requirements

-   Node.js **8+**
-   Express **4.17.+** 

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/narencoderpad/Unix_commands_NodeJS.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```bash
    cp .env.example .env
    ```
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment. Helpful comments added to `.env.example` file to understand the constants.
## Project  structure
```sh
.
├── index.js
├── package.json
├── model
│   └── ListModel.js
└── Routes
    └── ListRouter.js
 
```
## How to run

### Running  API server locally

```bash
npm run dev
```

You will know server is running by checking the output of the command `npm run dev`


### Creating new commands

If you need to add more commands just create seperate .js files in the project tree.


You can set custom command for test at `package.json` file inside `scripts` property. You can also change timeout for each assertion with `--timeout` parameter of mocha command.

### Creating new tests

If you need to add more test cases to the project just create a new file in `/test/` and run the command.

## ESLint

### Running  Eslint

```bash
npm run lint
```

You can set custom rules for eslint in `.eslintrc.json` file, Added at project root.

## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements. Pull requests are always welcome.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.