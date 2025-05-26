import {updateGoalWithoutAuth, updateRandomNameGoal} from "../../modules/update_goal";
import {createGoalWithRandomName, goalURL} from "../../modules/create_goal";
import {deleteGoal} from "../../modules/delete_goal";
import {getGoals} from "../../modules/get_goals";
import {schemaUpdateGoal} from "../../schemas/update_goal_schema";


describe('Update Goal', () => {

    before(`Create goal`, () => {
        createGoalWithRandomName()
    })

    it(`Should UPDATE request and return status 200`, () => {
        updateRandomNameGoal().then(response => {
            expect(response.status).to.eq(200)
        })
    })

    it(`Should UPDATE request contain correct name and id`, () => {
        updateRandomNameGoal()
        getGoals().then(response => {
            response.body.goals.forEach(goal => {
                if (goal.name === Cypress.env('goalName')) {
                    expect(goal.id).contain(Cypress.env('goalID'))
                    expect(goal.name).contain(Cypress.env('goalName'))
                }
            })
        })
    })

    it(`Should UPDATE request without authorization and return status 400`, () => {
        updateGoalWithoutAuth().then(response => {
            expect(response.status).to.eq(400)
        })
    })

    it(`Should validate schema of goal `, () => {
        updateRandomNameGoal().validateSchema(schemaUpdateGoal, {endpoint: goalURL, method: 'PUT', status: 200})
    })

    after(`Delete goal`, () => {
        deleteGoal()
    })
})