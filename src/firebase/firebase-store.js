import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBnOKy0aJtSl8X9FjmC-eRJyT1_nlwksWA",
  authDomain: "react-mobx-firebase.firebaseapp.com",
  databaseURL: "https://react-mobx-firebase.firebaseio.com",
  storageBucket: "react-mobx-firebase.appspot.com",
};
firebase.initializeApp(config);

const root = firebase.database().ref();
const todos = firebase.database().ref('todos');

const Fb = {
  root,
  todos
};
export { Fb };