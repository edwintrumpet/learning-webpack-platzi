import React, { useState } from 'react'
import data from '../../data.json'
import Loader from './Loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'
import '../../styles/less.less'
import '../../styles/sass.scss'
import '../../styles/stylus.styl'

console.log(data)

export default function App() {
    const [loaderList, setLoaderList] = useState([])

    async function handleClick() {
        setLoaderList(data.loaders)
        const { alertMessage } = await import ('./alert')
        alertMessage('This module has dynamically loaded!')
    }
    return (
        <div>
            <p className='sass'>Esto es Sass</p>
            <p className='less'>Esto es Less</p>
            <p className='stylus'>Esto es Stylus</p>
            <p className='post-css'>Esto es PostCss</p>
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
