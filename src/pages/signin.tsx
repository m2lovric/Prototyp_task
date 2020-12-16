import React, {FormEvent, useState} from 'react'
import Layout from '../components/Layout'
import { signIn } from '../firebase/auth'
import { navigate } from 'gatsby'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInForm = (e: FormEvent) => {
    e.preventDefault();
    signIn(email, password);
    navigate('/');
  }

  return (
    <Layout>
      <section className="sign">
        <article>
          <p>Sign In</p>
        </article>
        <form className="sign__form" onSubmit={signInForm} >
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={(e) => setEmail(e.currentTarget.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.currentTarget.value)} />
          <button type="submit" className="sign__btn red">Sign In</button>
        </form>
      </section>
    </Layout>
  )
}

export default SignIn;