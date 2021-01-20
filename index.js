const Promise = require('bluebird');
const Scraper = require('./lib/scraper.js');

console.log('hello');
module.exports = (options, cb) => {
  return Promise.try(() => {
    return new Scraper(options).scrape(cb);
  });
};

module.exports.defaults = Scraper.defaults;
