# Introduction
This is a sample project to show how API functional test automation and e2e UI automation can be performed with cypress. This project uses "https://www.demoblaze.com/index.html" 
as the FE application and "https://jsonplaceholder.typicode.com/" for the backend.

for further on cypress, take a look at "https://www.cypress.io/"

### Prject Setup
This project is build with cypress 7.3.0

you can install cypress by one command

```
npm install cypress --save-dev
```

Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of your project to ensure cypress is installed in the correct directory.

### How to run?

To run in GUI mode use following command: 
```
.\node_modules\.bin\cypress open
 ```
 
To run in Headless use following command: 
```
.\node_modules\.bin\cypress run
```

### Framework Organization

```
├── README.md
├── cypress
│   ├── fixtures            - Load a fixed set of data located in a file.
|
├── integrations
│   ├── lib                 - Environment configs
|   ├── UI_Modules          - UI functional and e2e automated testcases
│   ├── rest-test           - API functional tests
```
