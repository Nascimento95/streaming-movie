import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState({})
    
    const[isLoading, setIsLoading] = useState(true)

    const [error, setError] = useState(false)


    useEffect(() => {
        
        if (!url) return 
        setIsLoading(true)
        const  fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()

    },[url])
    
    return {isLoading, data, error}
} 