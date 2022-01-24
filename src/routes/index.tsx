import {Switch, Route} from "react-router-dom"
import Signup from "../pages/Signup/index"
import Login from "../pages/Login/index"
import Dashboard from "../pages/Dashboard/index"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    )
}

export default Routes