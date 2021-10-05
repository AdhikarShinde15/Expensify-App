// // const person = {
// //     name : 'Adhikar',
// //     age:23,
// //     location : {
// //         city:'Mumbai',
// //         temp: 209
// //     }
// // };

// // const {name, age} = person;
// // const {name:firstName = "Anonnymus", age} = person; // default with new var
// // const {name = "Anonymus", age} = person;//setting DEfault
// // console.log(`${name} is ${age}`);

// // // console.log(`its ${person.location.temp} iin ${person.location.city}`);

// // const {city, temp} = person.location
// // if(city && temp)
// // console.log(`its ${temp} iin ${city}`);

// // const {city: citti, temp: temperature} = person.location
// // if(citti && temperature)
// // console.log(`its ${temperature} iin ${citti}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher

// console.log(`${publisherName}`)

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania','19147'];


// const [street, city, state, zip] = address;
// const [street, city, state] = address;
// const [, city, state] = address;
// const [, , state = 'New York'] = address; // default 
// console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const  [product, , cost] = item;

console.log(`A medium ${product} costs ${cost}`)