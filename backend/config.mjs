import { MongoClient } from "mongodb";

async function main(){
    const uri = "mongodb+srv://taatolat:puL3LCO7E0kAconR@overmeli.qyyqrk9.mongodb.net/?retryWrites=true&w=majority&appName=OverMeLi"

    const client = new MongoClient(uri);

    try{
        await client.connect();
        await listDatabases(client);
    } catch (e){
        console.error(e);
    } finally{
        await client.close();
    }

}

async function listDatabases(client){
    const dabasesList = await client.db().admin().listDatabases();

    console.log("Databases: ");
    dabasesList.databases.forEach(db => {
        console.log(db.name)
    });
}

main().catch(console.error);
