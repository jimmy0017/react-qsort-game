import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Layout,Whoops404 } from './components/Layout'
import FirstStep from './components/containers/FirstStep'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={FirstStep}/>
            {/* <Route path="add-day" component={FirstStep}/>
            <Route path="list-days" component={SkiDayList}>
                <Route path=":filter" component={SkiDayList}/>
            </Route> */}
        <Route path="*" component={Whoops404}/>
        </Route>
    </Router>
)

export default routes
