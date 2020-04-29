import '../styles/index.css'
import search from './search'
import render from './render'


(async () => {
    try {
        const id = prompt('Who is that Pokemon?')
        const data = await search(id)
        render(data)
    } catch {
        console.log('This Pokemon does not exist')
    }
})()
