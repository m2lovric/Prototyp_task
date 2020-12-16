import { auth, db } from './app';
import { store } from '../../wrap-with-provider'
import { userExist, resetTaskState } from '../redux/actions';
import { navigate } from 'gatsby'
import { ObjectTask } from '../redux/store';

export const authState = auth.onAuthStateChanged((user) => {
  if( user === null) {
    store.dispatch(userExist({}));
  } else {
    store.dispatch(userExist(user));

    //Remove data from localStorage and add it to firebase
    const data = localStorage.getItem('state');
    const jsonData: ObjectTask[] = JSON.parse(data || '');
    const removeIds = jsonData.map(({id, ...rest}) => {
      return {...rest}
    });
    localStorage.removeItem('state');
    removeIds.map(task => {
      db.collection('users').doc(user.uid).collection('tasks').add({
        task: {...task}
      }).then(res => {
        store.dispatch(resetTaskState());
        return res;
      })
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