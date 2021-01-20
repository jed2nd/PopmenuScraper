const app = require('./index.js');

const callback = new Promise((resolve, reject) =>
  {
    console.log("done inside this callback");
    resolve(true);
  }
);

const config = {
  name: "jed"
};

app(config, callback);
