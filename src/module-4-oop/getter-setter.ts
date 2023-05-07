class BankAccountGetSet {
  id: number;
  name: string;
  private _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  get balance(): number {
    return this._balance;
  }
  set deposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

const myAccountGetSet = new BankAccountGetSet(444, "Rakib", 26);
console.log(myAccountGetSet.balance);
myAccountGetSet.deposit = 26;
console.log(myAccountGetSet.balance);
