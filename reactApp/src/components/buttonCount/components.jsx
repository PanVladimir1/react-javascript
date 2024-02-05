import { useState } from "react";
import { Button } from "../button/component";

export const ButtonCount = ({minValue, maxValue}) => {
    const [count, setCount] = useState(0);

    return <div>
            <Button text="-" 
                    onClick={() => {setCount(count - 1)}}
                    disabled={count === minValue}
                    />
            {count}
            <Button text="+"
                    onClick={() => {setCount(count + 1)}}
                    disabled={count === maxValue}
                    />
        </div> 
};