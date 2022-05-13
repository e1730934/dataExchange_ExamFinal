const deleteEvent = require('../deleteEvent')
const addInscription = require('../addInscription')
const getClientInfo = require('../getClientInfo')
const login = require('../users/login')
const register = require('../users/register')

    module.exports = {
        paths:{
            '/deleteEvent':{
                ...deleteEvent
            },
            '/addInscription':{
                ...addInscription
            },
            '/getClientInfo':{
                ...getClientInfo
            },
            '/login':{
                ...login
            },
            '/register':{
                ...register
            }
        }
    }
