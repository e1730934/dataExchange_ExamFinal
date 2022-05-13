module.exports = {
    get: {
        tags: [
            "Clients"
        ],
        description: "Display the client information",
        operationId: "getClientInfo",
        summary: "Display the client information",
        parameters: [
            {
                name: "clientId",
                in: "path",
                description: "The client id",
                schema: {
                    $ref: "#/components/schemas/GetClientInfo"
                },
            }
        ],
        responses:{
            "200":{
                description: "Success",
                schema: {
                    $ref: "#/components/schemas/GetClientInfo"
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
