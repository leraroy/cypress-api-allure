import {
    createGoalWithRandomName,
    goalURL,
    createGoal, createGoalWithFile, createGoalWithoutAuth
} from "../../modules/create_goal";
import {deleteGoal} from "../../modules/delete_goal";
import {schemaCreateGoal} from "../../schemas/create_goal_schema";
import {} from "../../modules/create_goal";
import {getGoal} from "../../modules/get_goal";

describe('Create Goals', () => {

    it(`Should POST request with random name and return status 200`, () => {
        createGoalWithRandomName().then(response => {
            expect(response.status).to.eq(200)
        })
    })

    it(`Should POST request with valid body from file and contain correct name`, () => {
        createGoalWithFile('example.json')
        getGoal().then(response => {
            expect(response.body.goal.name).eq(Cypress.env('goalName'))
            })
        })

    it(`Should POST request without authorization`,  () => {
        createGoalWithoutAuth().then(response => {
            expect(response.status).to.eq(400)
        })
    })

    it(`Should validate schema of goal `, () => {
        createGoalWithRandomName().validateSchema(schemaCreateGoal, {endpoint: goalURL, method: 'POST', status: 200})
    })

    afterEach(`Delete goal`, () => {
        deleteGoal()
    })
})