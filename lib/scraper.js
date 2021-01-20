const Promise = require('bluebird');
const Menu = require ('./menu.js');
const example = require('../example.json');

class Scraper{
  constructor(options){
    console.log("Provided config:");
    console.log(options);
  }

  scrape (cb) {
    return Promise.bind(this)
      .then(() => { 
        const menu = new Menu(example.data.menu);
        //menu.prettyPrint();
        //console.log(example.data);
      });
  }
}

module.exports = Scraper;
