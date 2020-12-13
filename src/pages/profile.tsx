import React from "react"
import Layout from '../components/Layout'
import { useSelector} from 'react-redux'

const Profile = () => {
  const user = useSelector((state: []) => state.user);
  return (
    <Layout>
      <h1>Profile</h1>
      <h3>Email:</h3>
      <p>{user.email}</p>
    </Layout>
  )
}

export default Profile;