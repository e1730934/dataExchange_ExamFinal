module.exports = {
    post: {
        tags: [
            "Inscription"
        ],
        content:{
            "csv": {
                schema: {
                    type: "string",
                    format: "binary"
                }
            }
        },
        description: "Add a new inscription",
        operationId: "addInscription",
        summary: "Add a new inscription",
        consumes: 'multipart/form-data',
        parameters: [
            {
                name: "file",
                in: "formData",
                description: "The inscription to add",
                required: true,
                type: "file",
            }
        ],
        responses:{
            "200":{
                description: "The evaluation was added",
                schema: {
                    $ref: "#/components/schemas/AddEvaluation"
                }
            },
            "500":{
                description: "The evaluation was not added",
                schema: {
                    $ref: "#/components/schemas/Error"
                }
            }
        }
    }
}
