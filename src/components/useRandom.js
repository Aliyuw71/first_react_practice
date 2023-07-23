import { useEffect, useState } from 'react'

function useRandom() {
    const [comments, setComments] = useState([])
    useEffect(() =>{
        const fetchJokes = async () =>{
            await fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then((res) => res.json()).then((data) =>{
               const newData = data[Math.floor(Math.random()*data.length)]
                setComments(newData.body)
            } )
        }
        fetchJokes()
    }, [])
  return comments
}

export default useRandom