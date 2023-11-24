import {useState,useEffect } from 'react'
import API_KEY from './key'
import axios from 'react'

const CONTEXT_KEY = "c4016d12ca9684430"

const useGoogleSearch = (term) => {
    const [data,setData ] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
                console.log('result: ', result)
            })
        }

        fetchData();
    }, [term])
}

export default useGoogleSearch