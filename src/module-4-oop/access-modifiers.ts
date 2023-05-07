class BankAccount {
  id: number;
  name: string;
  private balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  getBalance() {
    console.log(`My Current balance is ${this.balance}`);
  }
  addBalance(amount: number) {
    this.balance = this.balance + amount;
  }
}

class StudentAccount extends BankAccount {
  constructor(id: number, name: string, balance: number) {
    super(id, name, balance);
  }

  test() {
    this;
  }
}

const myAccount = new BankAccount(1, "MD Rakib", 20);
myAccount.addBalance(25);
myAccount.getBalance();
console.log(myAccount);
