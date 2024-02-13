import { useRef } from "react";
import {createPortal} from "react-dom";
import styles from './styles.module.scss';
import { Button } from "../button/component";

export const Modal = ({children, onClose}) => {
    const modalContainerRef = useRef(document.getElementById("modal-container"));

    return createPortal(<>
                            <div onClick={onClose} className={styles.overlay}/>
                            <div className={styles.root}>
                                            <Button text="Close"
                                                    onClick={onClose}>
                                            </Button>{children}
                            </div>
                        </>, 
                    modalContainerRef.current)
    
}; 