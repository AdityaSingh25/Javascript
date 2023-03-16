var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

for (let z of myMap.keys()) {
  console.log(`Key is ${z}`);
}
for (let z of myMap.values()) {
  console.log(`Value is ${z}`);
}

for (let [key, value] of myMap) {
  console.log(`Key is ${key} & value is ${value}`);
}

myMap.forEach((key) => console.log(`${key}`));
//it will give you values not keys

//read docs

myMap.forEach((k, v) => console.log(`Key is ${k} and value is ${v}`));

myMap.delete(2);
console.log(myMap);
