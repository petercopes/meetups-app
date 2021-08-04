import {MongoClient} from "mongodb";
async function handler(req,res){

    if(req.method==="POST"){
        const data = req.body;
        const client = await MongoClient.connect("mongodb+srv://pedrocopes:Pedro_310596@cluster0.zkpzu.mongodb.net/meetups?retryWrites=true&w=majority");
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = meetupsCollection.insertOne(data);
        console.log(result); 
        client.close;
        res.status(201).json({message:"Meetup Added correctly!"}); 
    }
}

export default handler;