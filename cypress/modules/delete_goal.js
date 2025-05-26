import * as allure from "allure-js-commons";

export const deleteGoal =()=>{
    return allure.step(`Delete goal with id ${Cypress.env('goalID')}`, () =>{
        return cy.sentRequest(`/goal/${Cypress.env('goalID')}`,'DELETE')
    })
}

export const deleteGoalWithInvalidID=()=>{
    return allure.step(`Delete goal with invalid id`, () =>{
        return cy.sentRequest(`/goal/b63b8dbe-8556-4147-dc22-d32a405a66bd`,'DELETE')
    })
}

export const deleteGoalWithoutAuth =()=>{
    return allure.step(`Delete goal with id ${Cypress.env('goalID')}`, () =>{
        return cy.sentRequestWithoutAuth(`/goal/${Cypress.env('goalID')}`,'DELETE')
    })
}
