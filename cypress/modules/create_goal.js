import {randomAllFields, randomNameGoal} from "../helper/RandomBody";
export const goalURL  = "/team/90151254704/goal";
import * as allure from "allure-js-commons";


export const createGoal =(body) =>{
    return allure.step(`Create goal with body ${body}`, () =>{
        return cy.sentRequest(goalURL,'POST', body).then(response => {
            Cypress.env('goalID', response.body.goal.id)
            Cypress.env('goalName', response.body.goal.name)
        })
    })
}
export const createGoalWithRandomName =()=>{
    return allure.step(`Create goal with random name`, () =>{
        return createGoal({"name": `${randomNameGoal()}`})
            .then(response => {
                Cypress.env('goalID', response.body.goal.id)
                Cypress.env('goalName', response.body.goal.name)
            })
    })
}

export const createGoalWithFile =(path)=>{
    return allure.step(`Create goal with valid body from file`, () =>{
        return  cy.fixture(path).then(fileContent => {
            fileContent.name = randomAllFields().name
            fileContent.due_date = randomAllFields().due_date
            fileContent.description = randomAllFields().description
            fileContent.multiple_owners = randomAllFields().multiple_owners
            fileContent.color = randomAllFields().color
            createGoal(fileContent)
                .then(response => {
                    Cypress.env('goalID', response.body.goal.id)
                    Cypress.env('goalName', response.body.goal.name)
                })
        })
    })
}

export const createGoalWithoutAuth =()=>{
    return allure.step(`Create goal with random name`, () =>{
        return cy.sentRequestWithoutAuth(goalURL,'POST', {"name": `${randomNameGoal()}`})
    })
}