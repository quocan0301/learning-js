// const myMap = new Map();

// myMap.set("key1", "value1");
// myMap.set("key1", "value2");

// console.log(myMap.get("key1")); // Kết quả: "value1"
// console.log(myMap.has("key2")); // Kết quả: true

// myMap.delete("key1");
// console.log(myMap.size);



//cấu trúc dữ liệu phức tạp
// const person1 = { name: "John", age: 30 };
// const person2 = { name: "Jane", age: 25 };

// const address1 = { street: "123 ABC Street", city: "New York" };
// const address2 = { street: "456 XYZ Street", city: "San Francisco" };

// const personMap = new Map();

// personMap.set(person1, address1);
// personMap.set(person2, address2);

// personMap.forEach((address, person) => {
//   console.log(`${person.name} (${person.age} years old) lives at ${address.street}, ${address.city}`);
// });

//2 map lồng nhau

// const student1 = { id: 1, name: "John" };
// const student2 = { id: 2, name: "Jane" };

// const scoreMap = new Map();

// const scores1 = new Map();
// scores1.set("Math", 90);
// scores1.set("Science", 85);

// const scores2 = new Map();
// scores2.set("Math", 95);
// scores2.set("Science", 92);

// scoreMap.set(student1, scores1);
// scoreMap.set(student2, scores2);

// scoreMap.forEach((scores, student) => {
//   console.log(`${student.name}'s scores:`);
//   scores.forEach((score, subject) => {
//     console.log(`${subject}: ${score}`);
//   });
// });

// const obj = {
//     a: 1,
//     b: 2
//   };
  
//   Object.defineProperty(obj, 'c', {
//     value: 3,
//     enumerable: false // Đặt thuộc tính 'c' không đếm được
//   });
  
//   // Sử dụng vòng lặp for...in
//   console.log("for...in loop:");
//   for (const key in obj) {
//     console.log(key, obj[key]);
//   }
  
//   // Sử dụng vòng lặp for...of
//   console.log("for...of loop:");
//   try {
//     for (const value of obj) {
//       console.log(value);
//     }
//   } catch (error) {
//     console.log(error);
//   }


//   // Sử dụng vòng lặp for...in
//   console.log("for...in loop:");
//   for (const key in obj) {
//     console.log(key, obj[key]);
//   }
  
//   // Sử dụng vòng lặp for...of và Object.getOwnPropertyNames()
//   console.log("for...of loop with Object.getOwnPropertyNames():");
//   const propertyNames = Object.getOwnPropertyNames(obj);
//   for (const key of propertyNames) {
//     console.log(key, obj[key]);
//   }
  
//   // Sử dụng vòng lặp for...of và Object.getOwnPropertySymbols()
//   console.log("for...of loop with Object.getOwnPropertySymbols():");
//   const propertySymbols = Object.getOwnPropertySymbols(obj);
//   for (const symbol of propertySymbols) {
//     console.log(symbol, obj[symbol]);
//   }

// const map = new Map();
// map.set("a", 1);
// map.set("b", 2);
// map.set("c", 3);

// console.log("entries() method:");
// for (const [key, value] of map) {
//   console.log(key, value);
// }

// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }


let i = 0;
let j = 10;
checkiandj: while (i < 4) {
  console.log("i",i);
  i += 1;
  checkj: while (j > 4) {
    console.log("j",j);
    j -= 1;
    if (j % 2 === 0) {
      continue checkiandj;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}