import React ,{useState} from 'react';
import Login from './Login';
import Register from './Register';
import Panel from './Panel';
import './Auth.css';


const MainAuth = (props) => {
    const [value,setValue] = useState("container")
    
    return (
        <div className={value}>
            <div className="forms-container">
                <div className="signin-signup">
                    <Login callback={()=>props.callback()}/>
                    <Register onChange = {(e) => {setValue(e)}}/>
                </div>
            </div>
            <Panel onChange = {(e) => {setValue(e)}}/>
        </div>
    )
}

export default  MainAuth;