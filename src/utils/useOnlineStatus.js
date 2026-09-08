import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const[status, setStauts] = useState(true)
    useEffect(()=>{
        addEventListener("online", () =>{
            setStauts(true)
        })
        addEventListener("offline", () =>{
            setStauts(false)
        })
    },[])

    return status 
}

export default useOnlineStatus