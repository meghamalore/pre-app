import { useState } from "react";

const Counter = () => {
    // let counterValue = 10;
    const [counterValue,setCountrValue] = useState(10);

    const increment = () => {
        setCountrValue(counterValue + 1);
    }

    const decrement = () => {
        setCountrValue(counterValue - 1);
    }

    const reset = () => {
        setCountrValue(0);
    }

    return <section className="mb-10">
            <h2 className="text-2xl">Count is</h2>
            <p className="text-xl">{counterValue}</p>
            <div className="flex gap-4 mb-4">
                <button onClick={decrement}> - Decrement</button>
                <button onClick={increment}> + Increment</button>
            </div>  
            <div>
                <button onClick={reset}>Reset</button>
            </div>
            </section>

}

export default Counter;