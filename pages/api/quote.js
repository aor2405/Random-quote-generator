import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_TOKEN);
  const db = client.db();
  const documents = await db.collection('quotes').find().toArray();

  client.close();

  res.json({ quotes: documents });
}
