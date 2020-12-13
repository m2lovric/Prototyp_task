import React from "react"
import Layout from '../components/Layout';
import Form from '../components/Form'
import List from '../components/List'

import '../scss/app.scss'

export default function Home() {
  return (
    <Layout>
      <section className="toDoList">
        <List />
        <Form />
      </section>
    </Layout>
  )
}