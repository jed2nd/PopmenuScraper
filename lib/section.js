const MenuItem = require('./menuItem.js');

class Section {
  constructor(json){
    this.name = json.name;
    this.menuItems = this.aggregateMenuItems(json.subsections);
  }

  prettyPrint() {
    console.log("+++Section+++");
    console.log(`name: ${this.name}`);
    console.log("Menu Items:");
    console.log(this.menuItems);
  }

  aggregateMenuItems(subsections) {
    console.log("subsections");
    console.log(subsections);
    const menuItems = subsections.reduce((a, subsection) => {
      a.concat(subsection.items.map((i) => new MenuItem(i)));
    });
    console.log("menu items");
    console.log(menuItems);
    return menuItems
  }
}

module.exports = Section
