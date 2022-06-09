import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
	const client = await MongoClient.connect(
		'mongodb+srv://tomquote:kilcock2022@cluster0.x1nmb.mongodb.net/tomQuotes?retryWrites=true&w=majority'
	);
	const db = client.db();
	const documents = await db.collection('quotes').find().toArray();

	client.close();

	res.json({ quotes: documents });
}
