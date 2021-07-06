import * as React from 'react';
import styled from "styled-components"
import {IoMdCheckmarkCircleOutline, IoMdStopwatch} from "react-icons/io"
import {IoPlayForwardOutline} from "react-icons/io5"
import {motion} from "framer-motion"


const Card = styled(motion.div)`
border-radius: 25px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding: 1.5em;
min-width: min(450px, calc(100vw - 50px));
opacity: ${props => props.status === "OK" ? 1 : props.status === "ONGOING" ? .6 : .3};
display: flex;
justify-content: space-between;
align-items: center;
margin: .5rem 0;

@media screen and (max-width: 700px) {
    align-self: center !important;
}
>div {
    order: ${props => props.style.alignSelf === "flex-end" ? 1 : -1};
}
h1 {
    font-size: 1rem;
}

h2 {
    font-size: .75rem;
    font-weight: 500;
    color: rgba(0,0,0,.5);
}

h3 {
    font-size: .5rem;
    color: rgba(0,0,0,.5);
    font-weight: 600;
}
h1,h2,h3 {
    margin: .5em 0;
}
`

const SchoolCard = ({children, style, status, delay}) => {
    return (
        <Card style={style} status={status} initial={{opacity: 0, scale: 0}} animate={{scale: 1, opacity: status === "OK" ? 1 : status === "ONGOING" ? .6 : .3, transition: {delay}}}>
            <div style={{margin: "0 15px"}}>
            {children}
            </div>
            
            {status === "OK" ? <IoMdCheckmarkCircleOutline color={"lime"} size={"1.5rem"}/> : status === "FUTURE" ? <IoPlayForwardOutline color={"red"} size={"1.5rem"}/> : <IoMdStopwatch color={"orange"} size={"1.5rem"}/>}
        </Card>
    )
}

export default SchoolCard
