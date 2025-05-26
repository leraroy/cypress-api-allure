import * as allure from "allure-js-commons";
import 'cypress-ajv-schema-validator';

Cypress.Commands.add('sentRequest', (endpoint, method, body)=> {
    return  allure.step(`Trying to send ${method} request to ${endpoint}`, () =>{
        if (body && Object.keys(body).length > 0)  {
            allure.attachment(`requestBody for ${method} ${endpoint}`, JSON.stringify(body), 'application/json')
            cy.log(`Trying to send ${method} request to ${endpoint} with body ${JSON.stringify(body)}`);
        } else {
            cy.log(`Trying to send ${method} request to ${endpoint} without body`);
        }

    return cy.request({
        url: endpoint,
        method: method,
        headers: {
            'Authorization': Cypress.env('token'),
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: body
    })
        .then(response => {
        allure.attachment(`response for ${method} ${endpoint}`, JSON.stringify(response.body), 'application/json')
        return cy.wrap(response);
    })
    })
})

Cypress.Commands.add('sentRequestWithoutAuth', (endpoint, method, body)=> {
    return  allure.step(`Trying to send ${method} request to ${endpoint}`, () =>{
        if (body && Object.keys(body).length > 0)  {
            allure.attachment(`requestBody for ${method} ${endpoint}`, JSON.stringify(body), 'application/json')
            cy.log(`Trying to send ${method} request to ${endpoint} with body ${JSON.stringify(body)}`);
        } else {
            cy.log(`Trying to send ${method} request to ${endpoint} without body`);
        }

        return cy.request({
            url: endpoint,
            method: method,
            headers: {
                'Authorization': '',
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false,
            body: body
        })
            .then(response => {
                allure.attachment(`response for ${method} ${endpoint}`, JSON.stringify(response.body), 'application/json')
                return cy.wrap(response);
            })
    })
})