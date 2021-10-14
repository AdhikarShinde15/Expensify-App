import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDKqJ9DfbFEa57OisMsgCsWBisSYjV3u4E",
    authDomain: "expensify-e3b85.firebaseapp.com",
    databaseURL: "https://expensify-e3b85-default-rtdb.firebaseio.com",
    projectId: "expensify-e3b85",
    storageBucket: "expensify-e3b85.appspot.com",
    messagingSenderId: "263045640302",
    appId: "1:263045640302:web:dfdde4bb05b0e8858b767f",
    measurementId: "G-2WMPDTZ15K"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref().on('value', (snapshot) => {
    console.log(snapshot.val())
})

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
//     stressLevel: 9,
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

