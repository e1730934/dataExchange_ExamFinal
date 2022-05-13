module.exports = {
    delete: {
        tags: [
            "Evenements"
        ],
        description: "Supprime un événement",
        operationId: "deleteEvent",
        summary: "Supprime un événement",
        parameters: [
            {
                name: "id",
                in: "path",
                description: "Identifiant de l'événement",
                schema: {
                    $ref: "#/components/schemas/deleteEvent"
                },
            }
        ],
        responses:{
            "201":{
                description: "Success",
                schema: {
                    $ref: "#/components/schemas/deleteEvent"
                }
            },
            "500":{
                description: "Internal server error",
                schema: {
                    $ref: "#/components/schemas/Error"
                }
            }
        }

    }
}
