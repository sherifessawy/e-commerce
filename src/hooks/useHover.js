import React, {useState, useLayoutEffect, useRef} from 'react'

function useHover() {
    let [isHovered, setIsHovered] = useState(false)
    const refEl = useRef(null)
    
    function enter() {
        setIsHovered(true)
        console.log('hovered', refEl.current)
    }
    
    function leave() {
        setIsHovered(false)
    }

    useLayoutEffect(() => { //i used useLayoutEffect because of bug i ran into when i used useEffect see "https://reactjs.org/blog/2020/08/10/react-v17-rc.html#effect-cleanup-timing"
        refEl.current.addEventListener("mouseenter", enter)
        refEl.current.addEventListener("mouseleave", leave)
        
        return () => {    
            console.log("im unmounted!", refEl.current)
            refEl.current.removeEventListener("mouseenter", enter)
            refEl.current.removeEventListener("mouseleave", leave)
        }
    }, [])

    return [isHovered, refEl]
}

export default useHover

