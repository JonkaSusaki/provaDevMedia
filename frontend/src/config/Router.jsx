import React from 'react'

import {Switch, Route} from 'react-router-dom'

import HomePage from '../pages/HomePage'
import FormPage from '../pages/FormPage'

export default function Router () {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/form" component={FormPage} />
        </Switch>
    )
}