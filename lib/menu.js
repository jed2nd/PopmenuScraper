const Section = require('./section.js');

class Menu{
  constructor(jsonBody){
    this.name = jsonBody.name;
    this.sections = jsonBody.sections.map((s) => new Section(s));
    console.log(this.sections);
  }

  prettyPrint() {
    console.log("===Menu===");
    console.log(`name: ${this.name}`);
    console.log("Sections:");
    this.sections.forEach((s) => s.prettyPrint());
  }
}

module.exports = Menu
