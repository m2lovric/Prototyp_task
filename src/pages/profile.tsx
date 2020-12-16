import React from "react"
import Layout from '../components/Layout'
import { useSelector} from 'react-redux'
import { IRootState } from '../redux/store';

const Profile = () => {
  
  const user = useSelector((state: IRootState) => state.user);
  return (
    <Layout>
      <h1>Profile</h1>
      <h3>Email:</h3>
      <p>{user.email}</p>
    </Layout>
  )
}

export default Profile;