import { db } from './app'

const getData = (userid:string) => {
  db.collection('users').doc(userid).collection('tasks').get().then(data => {
    console.log(data.docs);
  });
}