import React from 'react'

let counter = 0

const onChangeCounter = () => {
    counter = counter + 1
    console.log(counter)
}

const Counter = () => {
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={ onChangeCounter }>Counter up</button>
        </div>
    )
}

export default Counter
