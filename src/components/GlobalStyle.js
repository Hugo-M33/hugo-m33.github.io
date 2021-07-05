import * as React from "react"


const GlobalStyle = () => {
    return (
        <style jsx global>{`
            html{font-size: calc(12px + 1vw);}body{margin:0;}*{box-sizing:border-box;font-family:sans-serif}
        `}
            
        </style>
    )
}

export default GlobalStyle
