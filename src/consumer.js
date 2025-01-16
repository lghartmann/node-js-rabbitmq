import amqplib from "amqplib";

export default async function consumerConnection() {
  try {
    const connection = await amqplib.connect("amqp://localhost:4672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("Jobs");

    channel.consume("Jobs", (message) => {
      console.log(
        "Message received, content:",
        JSON.parse(message.content.toString())
      );
      channel.ack(message);
    });

    console.log("Consumer started, waiting for messages...");
  } catch (error) {
    console.error(error);
  }
}
