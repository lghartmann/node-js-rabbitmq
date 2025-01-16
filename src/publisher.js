import amqp from "amqplib";

if (!process.argv[2]) {
  console.log('Usage: npm run dev "input" ');

  process.exit(1);
}

const testMessage = JSON.stringify({ message: process.argv[2] });

export default async function publisherConnection() {
  try {
    const connection = await amqp.connect("amqp://localhost:4672");
    const channel = await connection.createChannel();

    await channel.assertQueue("Jobs");

    channel.sendToQueue("Jobs", Buffer.from(testMessage));
    console.log("Publisher started\n");
  } catch (error) {
    console.error(error);
  }
}
