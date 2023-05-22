import { makeAutoObservable, action, computed } from "mobx";

class Extras {
  constructor(snacks, wine) {
    makeAutoObservable(this);
    this.snacks = snacks;
    this.wine = wine;
    this.snacksQuantity = 0;
  }

  @action increaseQuantity() {
    this.snacksQuantity++;
  }

  @computed get snackPrice() {
    return this.snacks * this.snacksQuantity;
  }
}

const extras = new Extras();

export default extras;
