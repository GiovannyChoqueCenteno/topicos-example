import { useState } from "react"

const useModal = ( initialState = false)=>{
    const [isOpen, setIsOpen] = useState(false)
    const switchModal = () => {
        setIsOpen(!isOpen)
    }
    return {
        isOpen,
        switchModal
    }
}

export default useModal