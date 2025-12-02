import { useState } from "react"
import { delayFn } from "../helpers/delayFn"

export const useFetch = (callback) => {
    const [ IsLoading, setIsLoading ] = useState(false)
    const [ Error, setError ] = useState('')

    const fetchFn = async (arg) =>{
        try{
          setIsLoading(true)
          setError('')
          await delayFn()
          const response = await callback(arg)
          
          return response
        }
        catch(e){
          setError(e.message)
        }
        finally{
          setIsLoading(false)
        }
    }

    return [fetchFn,IsLoading, Error]
}