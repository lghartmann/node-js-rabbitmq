import consumerConnection from "./consumer.js";
import publisherConnection from "./publisher.js";

(async function start() {
  await publisherConnection();
  await consumerConnection();
})();
