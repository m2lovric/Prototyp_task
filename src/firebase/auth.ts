import { auth, db } from './app';
import { store } from '../../wrap-with-provider'
import { userExist, resetTaskState, addFromFirebase } from '../redux/actions';
import { navigate } from 'gatsby'
import { ObjectTask } from '../redux/store';
import { saveState } from '../localStorage/localStorage';

export const authState = auth.onAuthStateChanged((user) => {
  if( user === null) {
    store.dispatch(userExist({}));
    store.subscribe(() => {
      saveState(store.getState().task)
    })
  } else {
    store.dispatch(userExist(user));

    //Remove data from localStorage and add it to firebase
    const data = localStorage.getItem('state');
    localStorage.removeItem('state');
    const jsonData: ObjectTask[] = JSON.parse(data || '');
    const removeIds = jsonData.map(({id, ...rest}) => {
      return {...rest}
    });

    removeIds.map(task => {
      db.collection('users').doc(user.uid).collection('tasks').add({
        task: {...task}
      }).then(res => {
        store.dispatch(resetTaskState());
        return res;
      })
    });

    //Get data from firestore
    db.collection('users').doc(user.uid).collection('tasks').get().then( snapshot =>{
      const data = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data().task
        }
      })
      
      store.dispatch(addFromFirebase(data));
    })
  }
  return user;
})

export const signUp = (email: string, password: string, passwordConfirm: string) => {
  if (password === passwordConfirm) {
    auth.createUserWithEmailAndPassword(email, password)
      .then((data: object) => {
        return data;
      })
      .catch ((err: any) => {
        return err;
      })
  }
}

export const signIn = (email:string, password:string) =>{
  auth.signInWithEmailAndPassword(email, password)
    .then(data => {
      return data;
    })
    .catch ((err: any) => {
      navigate('/signin');
      return err;
    })
}

export const signOut = () => {
  auth.signOut()
  .then(() => {
    console.log('User signed out');
    navigate('/');
  })
  .catch ((err: any) => {
    return err;
  })
}