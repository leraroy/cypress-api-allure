import * as allure from "allure-js-commons";

export const getGoal=()=>{
    return allure.step(`Get goal with id ${Cypress.env('goalID')}`, () =>{
        return cy.sentRequest(`/goal/${Cypress.env('goalID')}`,'GET')
    })
}

export const getGoalWithoutAuth=()=>{
    return allure.step(`Get goal without authorization`, () =>{
        return cy.sentRequestWithoutAuth(`/goal/${Cypress.env('goalID')}`,'GET')
    })
}