import { MongoClient } from "mongodb";

async function main(functionp, ...params) {
    const uri = "mongodb+srv://taatolat:puL3LCO7E0kAconR@overmeli.qyyqrk9.mongodb.net/?retryWrites=true&w=majority&appName=OverMeLi";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await functionp(client, ...params); // Pasar todos los parámetros adicionales usando spread operator
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function createProduct(client, product) {
    const result = await client.db("OverMeli").collection("Products").insertOne(product);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function findOneProductgByName(client, nameOfProduct) {
    const result = await client.db("OverMeli").collection("Products").findOne({ productName: nameOfProduct });
    if (result) {
        console.log(`Found a product in the collection with the name '${nameOfProduct}':`);
        console.log(result);
    } else {
        console.log(`No product found with the name '${nameOfProduct}'`);
    }
}

/*
async function findOneProductgBetweenRates(client, minorRate, mayorRate) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").find(
        {
            rate: { $gte: minorRate },
            rate: { $lte: mayorRate }
        }
    ).toArray()
    if (result) {
        console.log(`Found a product in the collection with rate between '${minorRate}' and '${mayorRate}':`);
        console.log(result);
    } else {
        console.log(`No product found with rate between '${minorRate}' and '${mayorRate}'`);
    }
}

*/

async function listDatabases(client){
    const dabasesList = await client.db().admin().listDatabases();
    console.log("Databases: ");
    dabasesList.databases.forEach(db => {
        console.log(db.name)
    });
}

const product = {
    "userName": "Bruno",
    "productId": "01",
    "productName": "Televisor Samsung 40p",
    "rate": 4,
    "comment": "Cumple con lo esperado"
};

//main((client, params) => findOneProductgBetweenRates(client, params), 4.0, 5.0).catch(console.error);

main(findOneProductgBetweenRates, 4, 5).catch(console.error);




