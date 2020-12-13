import { Link } from 'gatsby'
import React from 'react'
import { useSelector } from 'react-redux'
import { signOut } from '../../firebase/auth';

interface State<T extends object> {
  state: T
}

const Header = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <header>
      <section className="header container--xl">
        <Link to="/" className="header__logo">TaskManager</Link>
        <div className="header__sign">
          <Link to="/signin" className="link">Sign In</Link>
          <Link to="/signup" className="link">Sign Up</Link>
          {
            user.uid
              ? (
                <>
                  <button onClick={() => signOut()}>Logout</button>
                  <Link to="/profile">Profile</Link>
                </>
              )
              : ''
          }
        </div>
      </section>
    </header>
  )
}

export default Header