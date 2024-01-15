// const { MongoClient } = require("mongodb");
// let uri =
//   "mongodb+srv://HuraiAH:test4321@cluster0.xadkal8.mongodb.net/usersMangement?retryWrites=true&w=majority";
// let dbConnection;
// module.exports = {
//   connectToDb: (cb) => {
//     MongoClient.connect(uri)
//       .then((client) => {
//         dbConnection = client.db();
//         return cb();
//       })
//       .catch((err) => {
//         console.log(err);
//         CSSMathNegate.log("not connected");
//         return cb(err);
//       });
//   },
//   getDb: () => dbConnection,
// };
