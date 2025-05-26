export const goalURL  = "/team/90151207922/goal";
import * as allure from "allure-js-commons";

export const getGoals =() => {
    return allure.step(`Get all goals`, () =>{
        return cy.sentRequest(goalURL, 'GET')
    })
}

export const getGoalsWithoutAuth =() => {
    return allure.step(`Get all goals without authorization`, () =>{
        return cy.sentRequestWithoutAuth(goalURL, 'GET')
    })
}







