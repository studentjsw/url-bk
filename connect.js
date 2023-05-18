// const mongoose = require('mongoose');

// /**
//  * MONGGOSE CONNECTIONS
//  */
// async function connectionToMongoDB(rul){
//     return mongoose.connect(url);
// }

// /**
//  * MONGODB CONNECTIONS EXPORT
//  */
// module.exports = {
//     connectionToMongoDB
// };

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

/**
 * CONNECT WITH THE DATABASE
 */
async function connectionToMongoDB(){
     await mongoose.connect(
        "mongodb+srv://ari:hF8kQAGMFbfCKr7D@cluster0.4hkvjxy.mongodb.net/shorturl?retryWrites=true&w=majority",
        { useNewUrlParser: true}
    )
    console.log("DB CONNECTED");
}
connectionToMongoDB();