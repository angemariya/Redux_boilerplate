import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { increment, descrement, incrementByAmount } from '../redux/counterSlice'

export const Counter = () => {
    const [value, setValue] = useState('');
    const counter = useSelector((state) => state.counter.value)

    const dispatch = useDispatch();
    return (
        <div>
            <h1>{ counter }</h1>
            <button onClick={()=> dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(descrement())}>Decrease</button>
            <input type="number" onChange={(e) => setValue(e.target.value)} />
            <button onClick={()=> dispatch(incrementByAmount(parseInt(value)))}>ChangeByValue</button>
        </div>
    )
}