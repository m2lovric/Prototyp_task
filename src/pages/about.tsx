import React, { useState } from "react"
import { Link } from 'gatsby'


const About = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Page 2</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Link to='/'>Home</Link>
    </>
  )
}

export default About;
