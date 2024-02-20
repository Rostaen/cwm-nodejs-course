//const p = Promise.resolve({id: 1});
//p.then(result => console.log(result));
// const p = Promise.reject(new Error('reason it failed'));
// p.catch(err => console.log(err));

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
        //reject(new Error('Because something failed'));
    }, 3000);
})

const p2 = new Promise(resolve => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 1000);
})

Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log(`Error: ${err.message}`));
