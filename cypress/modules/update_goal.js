import * as allure from "allure-js-commons";
import {randomColor, randomNameGoal} from "../helper/RandomBody";

export const updateGoal = (body)=>{
    return allure.step(`Update goal with body ${body}`, () =>{
        return cy.sentRequest(`/goal/${Cypress.env('goalID')}`,'PUT', body)
            .then(response => {
                Cypress.env('goalID', response.body.goal.id)
                Cypress.env('goalName', response.body.goal.name)
            })
    })
}

export const updateRandomNameGoal = ()=>{
    return allure.step(`Update goal with random name`, () =>{
        return updateGoal({"name": `${randomNameGoal()}`})
            .then(response => {
                Cypress.env('goalID', response.body.goal.id)
                Cypress.env('goalName', response.body.goal.name)
            })
    })
}

export const updateColorGoal = ()=>{
    return allure.step(`Update goal with random color`, () =>{
        return updateGoal({"color": `${randomColor()}`})
            .then(response => {
                Cypress.env('goalID', response.body.goal.id)
                Cypress.env('goalName', response.body.goal.name)
            })
    })
}

export const updateGoalWithInvalidID = ()=>{
    return allure.step(`Update goal with invalid id`, () =>{
        return cy.sentRequest(`/goal/1111131`,'PUT', {"name": `${randomNameGoal()}`})
            .then(response => {
                expect(response.status).to.eq(500)
            })
    })
}


export const updateGoalWithoutAuth = ()=>{
    return allure.step(`Update goal without authorization`, () =>{
        return cy.sentRequestWithoutAuth(`/goal/${Cypress.env('goalID')}`,'PUT', {"name": `${randomNameGoal()}`})
    })
}