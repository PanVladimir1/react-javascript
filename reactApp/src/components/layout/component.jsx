import { Footer } from "../footer/component";
import { Header } from "../header/component";

export const Layout = ({ children }) => {
    return <div>
            <Header/>
            {children}
            <Footer/>
            <div id="modal-container"/>
           </div>
};