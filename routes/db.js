var MongoClient = require('mongodb').MongoClient;

var DbConnection = function () {

    var client = null;
    var instance = 0;

    async function DbConnect() {
        try {
            let url = 'mongodb+srv://app_user:90vbKjfzMoBVD9k2@sandbox-fm7bc.mongodb.net/M001-SANDBOX';
            let _client = await MongoClient.connect(url);

            return _client;
        } catch (e) {
            return e;
        }
    }

    async function Get() {
        try {
            instance++;     // this is just to count how many times our singleton is called.
            console.log(`DbConnection called ${instance} times`);

            if (client != null) {
                console.log(`db connection is already alive`);
                return client;
            } else {
                console.log(`getting new db connection`);
                client = await DbConnect();
                return client;
            }
        } catch (e) {
            return e;
        }
    }

    return {
        Get: Get
    }
}


module.exports = DbConnection();