//Default parameter
function defaultAdd(num1: number, num2: number = 20): number {
  return num1 + num2;
}

defaultAdd(21);

//Speread Opperator
const myFriend = ["Mar", "dhor", "vor"];
const orFriend = ["bar", "var", "her"];

myFriend.push(...orFriend);

// console.log(myFriend);

//Rest parameter
const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends("Rakib", "Oh Tui");
