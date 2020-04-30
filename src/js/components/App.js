import React, { useState } from 'react'
import data from '../../data.json'
import Loader from './Loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

console.log(data)

export default function App() {
    const [loaderList, setLoaderList] = useState([])

    function handleClick() {
        setLoaderList(data.loaders)
    }
    return (
        <div>
            <video src={video} controls width={300} poster={logo} />
            <img src={logo} alt="logo" width={300} />
            <ul>
                {
                    loaderList.map(element => <Loader key={element.id} name={element.name} />)
                }
            </ul>
            <button onClick={handleClick}>Show what you have learned so far</button>
        </div>
    )
}
