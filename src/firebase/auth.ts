import { auth } from './app'
import { store } from '../../wrap-with-provider'
import { userExist } from '../redux/actions'
import { navigate } from 'gatsby'

export const authState = auth.onAuthStateChanged((user) => {
  if( user === null) {
    store.dispatch(userExist({}));
  } else {
    store.dispatch(userExist(user));
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