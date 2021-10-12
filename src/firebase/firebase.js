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
  
   database.ref().set({
      name:'Adhikar Shinde',
      age:26,
      isSingle: true,
      location: {
          city: "Kopergaon",
          Country: 'india'
      }
  }).then(()=> {
      console.log("data is saved");
  }).catch ((e) => {
      console.log(e);
  })

  database.ref('attributes').set({
      height:180,
      weight: 60
  }).then((data) => {
      console.log("Data Updated with", data);
  }).catch((e) => {
      console.log(e);
  });