
# Cypress Testing Library
Cypress Testing Library allows the use of dom-testing queries within Cypress end-to-end browser tests.

Check their official documentation at: https://testing-library.com/docs/cypress-testing-library/intro/

## Steps to install it from scratch
* Install the dependencies using the following command: 
``` npm install --save-dev cypress @testing-library/cypress ```
* Add the following line in the cypress/support/commands.js: 
``` import '@testing-library/cypress/add-commands' ```

You are ready to go!


## How to run this project after clone?

* Execute the command: ``` npm i ```
* Execute the command: ``` npm run cyrunner ```