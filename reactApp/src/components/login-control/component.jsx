import { useContext } from "react";
import { UserContext } from "../contexts/user";
import {  useState } from "react";
import { Modal } from "../modal/component";
import { Button } from "../button/component";
import { AuthorizationForm } from "../authorization-form/component.jsx";

export const LoginControl = () => {
    const {user, setUser} = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);    

    return  <div>
                
                { isOpen && (<Modal onClose={closeModal}>
                                <AuthorizationForm onLogin={closeModal}/>
                            </Modal>)
                }
                { user ? (<>
                                <span>{user}</span>
                                <Button text="Logout"
                                        onClick={() => setUser(null)}/>
                            </>)
                        
                        : (<Button onClick={() => setIsOpen(true)}
                                    text="Login"/>)
                }
            </div>
};