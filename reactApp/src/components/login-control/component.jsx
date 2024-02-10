import { useContext } from "react";
import { UserContext } from "../contexts/user";
import {Button} from "../button/component";

export const LoginControl = () => {
    const {user, setUser} = useContext(UserContext);
    return <div>
        {user ? <>
                    <span>{user}</span>
                    <Button text="Logout"
                            onClick={() => setUser(null)}/>
                </>  
              : <Button onClick={() => setUser("Ivan")} 
                        text="Login"/> 
        } 
    </div>
}