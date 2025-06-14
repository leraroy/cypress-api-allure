export const schemaCreateGoal = {
    "type": "object",
    properties: {
        "goal": {
            type: "object",
            properties: {
                "id": {type: "string"},
                "pretty_id": {type: "string"},
                "name": {type: "string"},
                "team_id": {type: "string"},
                "creator": {type: "number"},
            }
        }
    }
}
