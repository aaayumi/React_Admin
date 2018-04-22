import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Upload from './Upload'

const Main =()=> (
    <main>
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/upload' component={Upload}/>
        </Switch>
    </main>
)
export default Main
