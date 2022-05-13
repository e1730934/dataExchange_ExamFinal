const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer')
const swaggerUi = require("swagger-ui-express");
const docs = require('./docs');
require("dotenv").config()

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ dest: './uploads/' , storage: storage}).single('csv')

const auth = require("./middleware/auth");
const {deleteEvent} = require("./controllers/events");
const {clientInfo} = require("./controllers/client");
const {inscriptionCsv} = require("./controllers/inscription");
const {loginUser, registerUser} = require("./controllers/user");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(router)


router.use('/api-docs',swaggerUi.serve,swaggerUi.setup(docs));

router.delete('/delete/:id',auth, deleteEvent)
router.get('/clientInfo/:id',auth, clientInfo)
router.post('/inscription',auth, upload, inscriptionCsv)
router.post('/login',loginUser)
router.post('/signup', registerUser)

const server = app.listen(port, () => {
    console.log(`L'API peut maintenant recevoir des requêtes http://localhost:` + port);
    console.log("Swagger documentation : http://localhost:" + port + "/api-docs");
});
