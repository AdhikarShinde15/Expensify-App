import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PEOJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider,database as default };

// // Child Added
// database.ref('Expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// // Child Changed
// database.ref('Expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
//Child Removed
// database.ref('Expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('Expenses')
//     .on('value',((snapshot) => {
//         const expenses = [];
//         snapshot.forEach(child => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             });
//         });
//         console.log(expenses)
//     }));
// database.ref('Expenses')
//         .once('value')
//         .then((snapshot) => {
//             const expenses = [];

//             snapshot.forEach(child => {
//                 expenses.push({
//                     id: child.key,
//                     ...child.val()
//                 });
//             });
// console.log(expenses)
//         });

// database.ref('Expenses').push({
//     description:'Coffee',
//     note: "Tried Expensive Coffee",
//     amount: 25.69,
//     createdAt: "12/12/2021"
// })
// database.ref('Expenses').push({
//     description:'Rent',
//     note: "",
//     amount: 190515,
//     createdAt: "19/10/2021"
// })
// database.ref('Expenses').push({
//     description:'Water',
//     note: "Monthly Water Bill",
//     amount: 59.32,
//     createdAt: "30/10/2021"
// })



// database.ref('notes/-Mlx2WOa6vjg-gQiRQLR').remove()
// database.ref('notes').push({
//     title:'Course Topics',
//     body: "React Native , Node , Python"
// })

//  Challange
// database.ref().on('value', (snapshot) => {
//     const val = (snapshot.val())
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })



// database.ref('location/Country')
//         .once('value')
//         .then((snapshot) => console.log(snapshot.val()))
//         .catch((e) => console.log('Error',e))

// database.ref().set({
//     name: 'Adhikar Shinde',
//     age: 22,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: "Kopergaon",
//         Country: 'india'
//     }
// }).then(() => {
//     console.log("data is saved");
// }).catch((e) => {
//     console.log(e);
// })

// database.ref().update({
//     stressLevel: 9
//     'job/company':'Amazon',
//     'location/city': 'Seattle'
// })

// database.ref('isSingle')
//    .remove()
//    .then(() => {
//        console.log('is single removed')
//    }).catch ((e) => {
//        console.log('Error accured',e)
//    })

// database.ref('age').set(null)

