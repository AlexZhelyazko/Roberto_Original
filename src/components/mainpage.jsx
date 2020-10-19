import React from 'react'
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'
import mainp from './mainpage.module.css'
import Home from './home'
import About from './about'

const params = [
    { link: '/home', txt: 'Home' },
    { link: '/about', txt: 'About' },
    { link: '/contact', txt: 'Contact' },
]

const Pages = () => {
    return params.map((el) => {
        return <div><Link to={el.link}>{el.txt}</Link></div>
    })
}

const MainPage = () => {
    return (
        <BrowserRouter>
            <div className={mainp.wrap}>
                <Pages />
            </div>
            <Switch>
                <Route path='/home'><Home /></Route>
                <Route path='/about'><About /></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default MainPage;