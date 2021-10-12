const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject('This is my resolved Data');
    },2500);
});

console.log('Before')

promise.then((data) => {
  console.log(data)
}).catch((error) => {
    console.log(error)
});

console.log('After')