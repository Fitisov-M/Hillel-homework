let vegetable = {
    name: 'onions',
    color: 'white',
}
const { name, color } = vegetable;
console.log(`${name}s are usually ${color}`)

const { shape= 'round'} = vegetable;
console.log(`${name}s are usually ${shape}`);


let vegetables = [
     cucumber = {
        name: 'cucumbers ',
        color: 'green', 
    },
    tomato = {
        name: 'tomatos  ',
        color: 'red',  
    }
]
console.log(`${cucumber.name}s are usually ${cucumber.color}`);
console.log(`${tomato.name}s are usually ${tomato.color}`);

const [firstVegetable, ...otherVegetables] = vegetables;
console.log(firstVegetable.name === cucumber.name);


let students = [
    { name: 'Kate', age: 25 },
    { name: 'Artur', age: 30 },
    { name: 'Nick', age: 15 },
    { name: 'Alex', age: 28 },
    { name: 'Zhenia', age: 45 },
  ];
  
  const [, second, ...rest] = students;
  console.log(second); 
  console.log(rest.length);