module.exports = {
    components: {
        schemas: {
            // id model
            id: {
                type: "string", // data type
                description: "An id of a user", // desc
                example: "1234", // example of an id
            },
            // user model
            User: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "string", // data-type
                        description: "User identification number", // desc
                        example: "12345", // example of an id
                    },
                    name: {
                        type: "string", // data-type
                        description: "User's name", // desc
                        example: "Lorry James", // example of a name
                    },
                    email: {
                        type: "string", // data-type
                        description: "User's email", // desc
                        example: "lorry@mail.com", // example of a email
                    },
                    password: {
                        type: "string", // data-type
                        description: "User's password", // desc
                        example: "adm@adm", // example of a email
                    },
                    dob: {
                        type: "string", // data-type
                        description: "Date of birth", // desc
                        example: "2000-01-01", // example of a profile picture
                    }
                },
            },
            deleteEvent: {
                type: "path", // data type
                properties: {
                    id: {
                        in: "path", // data-type
                        type: "string", // data-type
                        description: "Event identification number", // desc

                    }
                },
            },
            AddInscription: {
                type: "object", // data type
                properties: {
                    file: {
                        type: "string", // data-type
                        format: "binary",
                        description: "Inscription file",
                        example: "inscription.csv", // example of a evaluation file
                    }
                }
            },
            GetClientInfo: {
                type: "path", // data type
                properties: {
                    id: {
                        type: "string", // data-type
                        description: "Client identification number", // desc
                        example: "1", // example of an id
                    }
                }
            },
            Login: {
                type: "object", // data type
                properties: {
                    email: {
                        type: "string", // data-type
                        description: "User's email", // desc
                        example: "email@email.com", // example of a email
                    },
                    password: {
                        type: "string", // data-type
                        description: "User's password", // desc
                        example: "password12345", // example of a password
                    },
                },
            },
            Register: {
                type: "object", // data type
                properties: {
                    name: {
                        type: "string", // data-type
                        description: "User's name", // desc
                        example: "nameUnDeuxTrois", // example of a name
                    },
                    email: {
                        type: "string", // data-type
                        description: "User's email", // desc
                        example: "email@email.com", // example of a email
                    },
                    password: {
                        type: "string", // data-type
                        description: "User's password", // desc
                        example: "password12345", // example of a password
                    },
                    dob: {
                        type: "string", // data-type
                        description: "User's date of birth", // desc
                        example: "2000-01-01", // example of a date of birth
                    }
                }
            },
            // error model
            Error: {
                type: "object", //data type
                properties: {
                    message: {
                        type: "string", // data type
                        description: "Error message", // desc
                        example: "User Not found", // example of an error message
                    },
                    internal_code: {
                        type: "string", // data type
                        description: "Error internal code", // desc
                        example: "Invalid parameters", // example of an error internal code
                    },
                },
            },
        },
    },
}
