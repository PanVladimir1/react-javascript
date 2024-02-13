import {  useContext, useState } from "react";
import { UserContext } from "../contexts/user";
import { Button } from "../button/component";

export const AuthorizationForm = ({ onLogin }) => {
    const [userName, setUserName] = useState("");
    const {setUser} = useContext(UserContext);

    return <div>
                <input  value={userName} 
                        type="text" 
                        onChange={(event => setUserName(event.target.value))} />
                <Button text="Login" 
                        onClick={() => {setUser(userName); onLogin();}}
                        disable={userName?.length === 0}  />
            </div>
};