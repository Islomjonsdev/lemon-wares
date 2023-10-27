import React from 'react'
import { Route } from 'react-router-dom'
import BlogNews from './blogNews/BlogNews'
import BlogNewsHero from './blogNewsHero/BlogNewsHero'
import Home from './home/Home'
import Login from './login/Login'
import Signup from './signup/Signup'

const index = () => {
  return (
    <div>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/signup">
            <Signup />
        </Route>
        <Route exact path="/accounts">
            <Login />
        </Route>
        <Route exact path="/blognews">
            <BlogNews />
            <BlogNewsHero />
        </Route>
    </div>
  )
}

export default index