import { useSelector, useDispatch } from "react-redux"
import { increase, decrease, changeByValue } from "../redux/actionCreator";
import { useState } from "react";

export const Counter = () => {
    const [value, setValue] = useState('');
    const counter = useSelector((state) => state.counter.counter)
    console.log(counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{ counter }</h1>
            <button onClick={()=> dispatch(increase())}>Increase</button>
            <button onClick={() => dispatch(decrease())}>Decrease</button>
            <input type="number" onChange={(e) => setValue(e.target.value)} />
            <button onClick={()=> dispatch(changeByValue(parseInt(value)))}>ChangeByValue</button>
        </div>
    )
}