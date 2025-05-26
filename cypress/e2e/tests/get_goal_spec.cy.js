import {getGoal} from "../../modules/get_goal";
import {createGoalWithRandomName, goalURL} from "../../modules/create_goal";
import {deleteGoal} from "../../modules/delete_goal";
import {schemaGetGoal} from "../../schemas/get_goal_schema";
import {getGoalWithoutAuth} from "../../modules/get_goal";

describe('Get Goal', () => {

    before(`Create goal`, () => {
        createGoalWithRandomName()
    })

    it(`Should GET request and return status 200`, () => {
        getGoal().then(response => {
            expect(response.status).to.eq(200)
        })
    })

    it(`Should GET request goal contain correct name and id`, () => {
        getGoal().then(response => {
            expect(response.body.goal.name).contain(Cypress.env('goalName'))
            expect(response.body.goal.id).contain(Cypress.env('goalID'))
        })
    })

    it(`Should GET request without authorization and return status 400`, () => {
        getGoalWithoutAuth().then(response => {
            expect(response.status).to.eq(400)
        })
    })

    it(`Should validate schema of goal `, () => {
        getGoal().validateSchema(schemaGetGoal, {endpoint: goalURL, method: 'GET', status: 200})
    })

    after(`Delete goal`, () => {
        deleteGoal()
    })
})