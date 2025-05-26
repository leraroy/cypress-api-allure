import {deleteGoal, deleteGoalWithInvalidID} from "../../modules/delete_goal";
import {createGoalWithRandomName} from "../../modules/create_goal"
import {deleteGoalWithoutAuth} from "../../modules/delete_goal";
import {getGoals} from "../../modules/get_goals";

let bool = false

describe('Delete Goals', () => {

    beforeEach(`Create goal`, () => {
        createGoalWithRandomName()

    })

    it(`Should DELETE request and return status 200`, () => {
        deleteGoal().then(response => {
            expect(response.status).to.eq(200)
        })
    })

    it(`Should DELETE request and not contains correct name`, () => {
        deleteGoal()
        getGoals().then(response => {
            response.body.goals.forEach (goal => {
                if (goal.name === Cypress.env('goalName')){
                    bool=true
                }
            })
            expect(bool).to.eq(false)
        })
    })

    it(`Should DELETE request with invalid id`, () => {
        deleteGoalWithInvalidID().then(response => {
            expect(response.status).to.eq(404)
        })
    })

    it(`Should DELETE request without authorization and return status 400`, () => {
        deleteGoalWithoutAuth().then(response => {
            expect(response.status).to.eq(400)
        })
    })
    after(`Delete goal`, () => {
        deleteGoal()
    })
})