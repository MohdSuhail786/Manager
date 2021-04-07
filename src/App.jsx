import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AdminTest from './AdminComponents/AdminTest';
import MainAuth from './AuthComponents/MainAuth';
import Form from './FormComponents/Form';
import FullWidthTabs from './FormComponents/NavbarComponent';
import Protected from './MiddlewareComponents/Protected';


const App = () => {

    return (
        <main>
            <Switch>
            <Route  path='/' exact > 
                <Protected Comp={MainAuth}/>
            </Route>
            <Route exact path='/form'>
                <Protected Comp = {FullWidthTabs}/>
            </Route>     
            <Route exact path='/admin'>
                <Protected Comp = {AdminTest}/>
            </Route>  
            </Switch>
        </main>
    )
}

export default App;