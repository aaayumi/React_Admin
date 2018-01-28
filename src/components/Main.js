import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Inbox from './Inbox'

const Main =()=> (
    <main>
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/inbox' component={Inbox}/>
        </Switch>
    </main>
)
export default Main