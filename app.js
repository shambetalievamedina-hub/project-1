//                  0          1        2         3
let cities = ['Chicago', 'Boston', 'London', 'Bishkek']

console.log(cities);
console.log(cities[1]);

cities.push('Osh')
cities.push('Kanada')

cities.pop()
cities.pop()

cities.unshift('Dubai')

cities.shift()

console.log(cities);


let numbers = [4, 7, 3, 8, 10, 23, 13]

console.log(numbers);
console.log(numbers[3]);

let one = numbers.map((num)=>(num * 2))
let two = numbers.filter((num)=>(num % 2 == 0))
let three = numbers.filter((num)=>(num % 2 == 1))


console.log(one);
console.log(two);
console.log(three);




