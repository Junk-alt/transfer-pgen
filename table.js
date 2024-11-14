class Table {
    constructor() {
        this.tables = {};
    }

    addGroup(groupName){
        this.tables[groupName] = [];
    }

    add(groupName, id, rarity){
      if(this.tables[groupName] == undefined) throw new Error(`Error - Unknown table name '${groupName}'`)
        this.tables[groupName].push({type: id, rarity: rarity});
    }

    get(groupName){
      if(this.tables[groupName] == undefined) throw new Error(`Error - Unknown table name '${groupName}'`)
      return this.tables[groupName];
    }
}

module.exports = Table;
