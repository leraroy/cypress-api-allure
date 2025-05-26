import {getGoals, getGoalsWithoutAuth, goalURL} from "../../modules/get_goals";
import {createGoalWithRandomName} from "../../modules/create_goal";
import {deleteGoal} from "../../modules/delete_goal";
import {schemaGetGoals} from "../../schemas/get_goals_schema";

describe('Get Goals', () => {

    before(`Create goal`, () => {
        createGoalWithRandomName()
    })

    it(`Should GET request and  return status 200`, () => {
        getGoals().then(response => {
            expect(response.status).to.eq(200)
        })
    })

    it(`Should GET request contain correct name and id`, () => {
        getGoals().then(response => {
            response.body.goals.forEach(goal => {
                if (goal.name === Cypress.env('goalName')) {
                    expect(goal.name).contain(Cypress.env('goalName'))
                }
            })
        })
    })

    it(`Should GET request without authorization and  return status 400`, () => {
        getGoalsWithoutAuth().then(response => {
            expect(response.status).to.eq(400)
        })
    })


    it(`Should validate schema of goal `, () => {
        getGoals().validateSchema(schemaGetGoals, {endpoint: goalURL, method: 'GET', status: 200})
    })

    after(`Delete goal`, () => {
        deleteGoal()
    })
})