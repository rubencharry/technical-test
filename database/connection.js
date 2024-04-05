const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect("mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/challengeBackRubenCharry?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin");

        console.log("¡¡Connected successfully!!")

    } catch (err) {
        console.log(err);
        throw new Error("Failed to connect to the database")
    }
}

module.exports = connection;