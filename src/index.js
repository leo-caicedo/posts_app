const createApp = require("./app");

const { config } = require("./config");
const app = createApp();
require("./db");

app.listen(config.port, (err) => {
  if (err) {
    return console.error(`Error: ${err}`);
  }
  console.log(`Express listening on port ${config.port}`);
});
