import { useState } from "react";
import { Button } from "../button/component";

export const ButtonCount = () => {
    const [count, setCount] = useState(0);
    const [disabledMin, setDisabledMin] = useState(true);
    const [disabledMax, setDisabledMax] = useState(false);

    return <div>
            <Button text="-" 
                    onClick={() => {
                        if (count === 0){
                                setDisabledMin(true);
                                setDisabledMax(false);
                        } else{
                                setCount(count-1)
                                setDisabledMax(false);
                        }}}
                    disabled={disabledMin}
                    />
            {count}
            <Button text="+"
                    onClick={() => {
                        if (count === 5){
                                setDisabledMax(true);
                                setDisabledMin(false);
                        }else{
                                setCount(count+1)
                                setDisabledMin(false);
                        }}}
                    disabled={disabledMax}/>
        </div> 
};