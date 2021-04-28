import React from 'react';
import s from './Counter.module.css';


type CounterPropsType = {
    count: number
    incCount: () => void
    resetCount: () => void
}


export function Counter(props: CounterPropsType) {

    return (
        <div>
            <div className={props.count===5 ? s.error : s.num}>
                {props.count}
            </div>

            <div className={s.buttons}>
                <button onClick={props.incCount} disabled={(props.count === 5)}>inc</button>
                <button onClick={props.resetCount} disabled={(props.count === 0)}>reset</button>
            </div>
        </div>
    )
}