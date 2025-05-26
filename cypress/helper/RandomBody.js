import {faker} from '@faker-js/faker'
export const randomAllFields = () => {
    return {
        "name": faker.person.firstName(),
        "due_date": faker.number.int({ max: 10000 }),
        "description": faker.lorem.word(),
        "multiple_owners": faker.datatype.boolean(),
        "color": faker.color.human()
    }
}
export const randomNameGoal = () => {
    return faker.person.firstName()
}

export const randomColor = () => {
    return faker.color.human()
}