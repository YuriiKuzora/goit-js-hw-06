"use strict";

class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  //! Повертає поточний рядок
  getItems() {
    return this.#items.slice();
  }

  //! Додає до масиву
  addItem(newItem) {
    this.#items.push(newItem);
  }

  //! Видаляє з масиву
  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
