const express = require('express');
const urlRoute = require('./routes/url');
const dotenv = require('dotenv');
// const shortId = require('./controllers/url');
const URL = require('./models/url');
const connect = require('./connect');

var cors = require('cors')


/**
 * SERVER CREATED FROM EXPRESS WITH PORT IS 8000
 */
const app = express();
const PORT = 8000;
app.use(cors())

/**
 * CONFIGURATION FOR ENV VARIABLES AND INJECT DATABASE
 */

dotenv.config();
require("./connect");


/**
 * MIDDLE WARE
 */
app.use(express.json());

app.get('/',(req, res) => {
    res.send("Welcome to the url hsortner ")
})
/**
 * SERVER USING ROUTER 
 */
app.use("/url", urlRoute);

/**
 * METHOD: GET
 * INPUT: REQ
 * OUTPUT: RES
 * PATH: /:SHORTID
 */
app.get('/:shortId', async (res,req) =>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistry:{
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL)
});



/**
 * SERVER LISREN WITH PORT 
 */
app.listen(PORT, () => console.log(`SERVER STARTED AT PORT ${PORT}`));
