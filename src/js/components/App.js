import React, { useState } from 'react'
import data from '../../data.json'
import Loader from './Loader'

console.log(data)

export default function App() {
    const [loaderList, setLoaderList] = useState([])

    function handleClick() {
        setLoaderList(data.loaders)
    }
    return (
        <div>
            <ul>
                {
                    loaderList.map(element => <Loader key={element.id} name={element.name} />)
                }
            </ul>
            <button onClick={handleClick}>Show what you have learned so far</button>
        </div>
    )
}
