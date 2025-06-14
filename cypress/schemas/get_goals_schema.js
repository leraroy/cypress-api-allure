export const schemaGetGoals = {
    "type": "object",
    properties: {
    "goals": {
        type: "array",
        items: {
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
}
